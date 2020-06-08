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

function tilePressed(index) {
  return (e) => {
    console.log("tile pressed", index, e);
    animateToNewState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15]);
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
  };
  for (let i = 0; i < board.currentState.length; i++) {
    const tile = draw
      .nested()
      .size(squareSize, squareSize)
      .move(getX(i) * squareSize, getY(i) * squareSize)
      .on("click", tilePressed(i));
    const rect = tile
      .rect(squareSize, squareSize)
      .addClass("tile")
      .addClass((getX(i) + getY(i)) % 2 ? "odd" : "even");
    if (i + 1 === m * n) {
      tile.addClass("empty-tile");
    }
    const tileId = i === m * n - 1 ? 0 : i + 1;
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
        .animate(1000, 0, "absolute")
        .move(
          board.getX(index) * board.squareSize,
          board.getY(index) * board.squareSize
        );
      //Move the the tile from newState to to new state (index)
    }
  }
  timeline.play();
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
