var arr = [];
for (let i = 1; i < 10; i++) {
    arr.push(i);
}
// getData and render
function getData() {
    document.getElementById("blockElements").innerHTML = '';
    console.log(arr)
    for (let i = 0; i < arr.length;) {
        renderMyBlocks(arr[i], arr[i + 1], arr[i + 2]);
        i = i + 3;
    }
}
getData();

function onSuffle() {
    arr.sort(() => 0.5 - Math.random());
    document.getElementById("blockElements").innerHTML = '';
    getData();
}

function onSort() {
    arr.sort();
    document.getElementById("blockElements").innerHTML = '';
    getData();
}

function renderMyBlocks(block, block1, block2) {
    document.getElementById("blockElements").innerHTML +=
        "<div class='row-container'>" +
        "<div class='test block" + block + "' id='" + block + "'>"
        + block +
        "</div><div class='test block" + block1 + "' id='" + block1 + "'>"
        + block1 +
        "</div><div class='test block" + block2 + "' id='" + block2 + "'>"
        + block2 +
        "</div></div>";
}
