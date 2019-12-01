let memeCount = 0;
let currentNode;
// register event handler and initialize currentNode
function start() {
  var memeForm = document.getElementById("memeForm");
  memeForm.addEventListener("submit", addMeme, false);
  document
    .getElementById("removebtn")
    .addEventListener("click", removeMeme, false);
  // initialize current node
  currentNode = document.getElementById("meme1");
}
window.addEventListener("load", start, false);
// append div template to meme flexbox
function addMeme() {
  event.preventDefault();
  if (memeCount >= 10) {
    alert(
      "You have reached the maximum amount of memes that can be generated."
    );
    return;
  }
  var memeUrl = document.getElementById("memeurl").value;
  var topTxt = document.getElementById("toptext-input").value;
  var btmTxt = document.getElementById("btmtext-input").value;
  ++memeCount;
  let newMeme = document.createElement("div");
  newMeme.innerHTML = document.getElementById("memeTmplt").innerHTML;
  newMeme.className = "meme-wrapper";
  document.getElementById("meme-flexbox").appendChild(newMeme);
  newMeme.firstElementChild.src = memeUrl; // sets img src of newMeme div
  newMeme.children[1].innerText = topTxt; // set val of top text input from form
  newMeme.children[2].innerText = btmTxt; // set val of btm text input from form
  newMeme.id = "meme" + memeCount; // sets id of meme wrapper, can refer to delete later
  // clear form
  memeForm.reset();
  switchTo(newMeme);
}
// helper function that switches to currentNode
function switchTo(newMeme) {
  currentNode = newMeme;
}
// removes current node (last generated meme)
function removeMeme() {
  if (memeCount < 1) alert("There are no memes to remove.");
  else {
    var removeNode = document.getElementById("meme" + memeCount);
    removeNode.remove();
    --memeCount;
  }
}
