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

window.onload = function () {
    setGame();
}
var colors = [
    "#64748b",
    "#ef4444",
    "#f59e0b",
    "#84cc16",
    "#22c55e",
    "#14b8a6",
    "#0ea5e9",
    "#8b5cf6",
    "#ec4899"
]
function setGame() {
    //digit 1-9 
    for(let i = 1; i<=9; i++) {
        let number = document.createElement("div");
        let hues = document.createElement("div");
        
        hues.style.backgroundColor = colors[i-1];
        hues.id = i;
        number.id = i;

        //hues.innerText = i;
        number.innerText = i;

        number.addEventListener("click", selectedNumber);
        
        number.classList.add("number");
        hues.classList.add("hues");
        
        document.getElementById("digits").appendChild(number);
        document.getElementById("hue").appendChild(hues);

    }

    //board9x9
    for(let r = 0; r < 9; r++){
        for(let c= 0; c < 9; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(board[r][c] != "-"){
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if(r == 2 || r == 5){
                tile.classList.add("horizontal-line");
            }
            if(c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectedTile)
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}
function selectedNumber() {
    if(numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectedTile() {
    if(numSelected) {
        if(this.innerText != "") {
            return;
        }

        //coordinatess
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if(solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}