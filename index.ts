import { SVG, Timeline, Svg } from "@svgdotjs/svg.js";

let currentState = [];
const DIRECTIONS = {
  u: { text: "up", id: "u", emoji: "⬆" },
  r: { text: "right", id: "r", emoji: "⮕" },
  d: { text: "down", id: "d", emoji: "⬇ " },
  l: { text: "left", id: "l", emoji: "⬅" },
};

let board;

function main() {
  board = createBoard();
}

function getXforMN(m, n) {
  return (index) => index % n;
}

function getYforMN(m, n) {
  return (index) => Math.floor(index / m);
}

function repeat(elem, times) {
  return Array(times).fill(elem);
}

function calculateNextSteps(
  {
    currentState,
    m,
    n,
    getY,
  }: { currentState: number[]; m: number; n: number; getY: (a: number) => any },
  pressedTile: number
) {
  if (pressedTile !== 0) {
    const indexOfPressedTile = currentState.indexOf(pressedTile);
    console.log(indexOfPressedTile);
    let steps = [];
    //Check horizon axis
    for (let i = 1; i < m; i++) {
      const row = getY(indexOfPressedTile);
      const nextR = row * m + ((indexOfPressedTile + i) % m);
      if (currentState[nextR] === 0) {
        const diff = indexOfPressedTile - nextR;

        console.log("found x", nextR, diff);
        steps = repeat(
          diff < 0 ? DIRECTIONS["r"].id : DIRECTIONS["l"].id,
          Math.abs(diff)
        );
        continue;
      }
    }
    if (!steps.length) {
      //Check vertical axis
      for (let j = 1; j < n; j++) {
        const nextC = (indexOfPressedTile + j * n) % (m * n);
        if (currentState[nextC] === 0) {
          console.log("found y", nextC, (indexOfPressedTile - nextC) / 4);
          const diff = (indexOfPressedTile - nextC) / 4;
          steps = repeat(
            diff < 0 ? DIRECTIONS["d"].id : DIRECTIONS["u"].id,
            Math.abs(diff)
          );
          continue;
        }
      }
    }
  }
  return steps;
}

function executeSteps({ currentState }, steps) {
  let tempState = currentState;
  for (let i = 0; i < steps.length; i++) {
    tempState = executeStep(tempState, steps[i]);
  }
  return tempState;
}

function executeStep(currentState, step) {
  let i0 = currentState.indexOf(0);
  let newState = [...currentState];
  let temp, newPosition;
  switch (step) {
    case DIRECTIONS["u"].id:
      newPosition = i0 + 4;
      break;
    case DIRECTIONS["r"].id:
      newPosition = i0 - 1;
      break;
    case DIRECTIONS["d"].id:
      newPosition = i0 - 4;
      break;
    case DIRECTIONS["l"].id:
      newPosition = i0 + 1;
      break;

    default:
      break;
  }
  newState[i0] = newState[newPosition];
  newState[newPosition] = 0;
  return newState;
}

function tilePressed(index) {
  return (e) => {
    console.log("tile pressed", index, e);
    const newSteps = calculateNextSteps(board, index);
    const newState = executeSteps(board, newSteps);
    console.log({ newState, newSteps });

    animateToNewState(newState);
  };
}

function createBoard() {
  const squareSize = 70;
  const m = 4,
    n = 4;
  const getX = getXforMN(m, n),
    getY = getYforMN(m, n);
  var draw = SVG()
    .addTo("#puzzle-15")
    .size(m * squareSize, n * squareSize);
  let board = {
    m,
    n,
    getX,
    getY,
    squareSize,
    currentState: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
    tiles: {},
    steps: [],
  };
  for (let i = 0; i < board.currentState.length; i++) {
    const tileId = i === m * n - 1 ? 0 : i + 1;

    const tile = draw
      .nested()
      .size(squareSize, squareSize)
      .move(getX(i) * squareSize, getY(i) * squareSize)
      .on("click", tilePressed(tileId));
    const rect = tile
      .rect(squareSize, squareSize)
      .addClass("tile")
      .addClass((getX(i) + getY(i)) % 2 ? "odd" : "even");
    if (i + 1 === m * n) {
      tile.addClass("empty-tile");
      tile.back();
    }
    tile.plain(String(tileId)).attr({
      x: "50%",
      y: "50%",
      "alignment-baseline": "middle",
      "text-anchor": "middle",
    });
    tile.plain(",").attr({
      x: "80%",
      y: "50%",
      "alignment-baseline": "middle",
      "text-anchor": "middle",
      opacity: 0,
    });
    tile.data("tileId", tileId);
    board.tiles[tileId] = tile;
  }
  return board;
}

function animateToNewState(newState) {
  const moves = {};
  var timeline = new Timeline();
  timeline.pause();
  for (let index = 0; index < board.currentState.length; index++) {
    const currentTileId = board.currentState[index];
    const tile = board.tiles[currentTileId] as Svg;
    if (tile.data("tileId") !== newState[index]) {
      console.log(tile.data("tileId"), newState[index], "in", index);

      board.tiles[newState[index]]
        .timeline(timeline)
        .animate(200, 0, "absolute")
        .move(
          board.getX(index) * board.squareSize,
          board.getY(index) * board.squareSize
        );
      //Move the the tile from newState to to new state (index)
    }
  }
  timeline.play();
  board.currentState = [...newState];
}

function moveCommand(direction, steps) {
  switch (direction) {
    case DIRECTIONS["u"].id:
      break;
    case DIRECTIONS["r"].id:
      break;
    case DIRECTIONS["d"].id:
      break;
    case DIRECTIONS["l"].id:
      break;

    default:
      break;
  }
}

main();
