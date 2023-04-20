
var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

var colors = [
    "#94a3b8",
    "#f87171",
    "#fbbf24",
    "#a3e635",
    "#4ade80",
    "#2dd4bf",
    "#38bdf8",
    "#a78bfa",
    "#f472b6"
]
var colors2 = [
    "#e2e8f0",
    "#fecaca",
    "#fde68a",
    "#d9f99d",
    "#bbf7d0",
    "#99f6e4",
    "#7dd3fc",
    "#ddd6fe",
    "#fbcfe8"
]

window.onload = function () {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        let hue = document.createElement("div");
        number.id = i;
        hue.id = i;

        hue.style.backgroundColor = colors[i - 1];
        number.innerText = i;
        hue.innerText = i;
        number.addEventListener("click", selectNumber);
        hue.addEventListener("click", hueSelector);

        number.classList.add("number");
        hue.classList.add("hue");
        document.getElementById("digits").appendChild(number);
        document.getElementById("hues").appendChild(hue);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}
function hueSelector() {
    let cooler = this.id - 1;
    document.getElementById("board").style.backgroundColor = colors[cooler];
    console.log(colors2[cooler]);
    document.querySelector("body").style.backgroundColor = colors2[cooler];
    //document.getElements("shifter").style.backgroundColor = colors2[cooler];
}



function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}

function solver() {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let name = r.toString() + "-" + c.toString();
            document.getElementById(name).innerText = solution[r][c];            
        }
    }
}