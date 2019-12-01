let memeCount = 0;
let currentNode;
// register event handler and initialize currentNode
function start() {
  document
    .getElementById("memeForm")
    .addEventListener("submit", addMeme, false);
  // initialize current node
  // currentNode = document.getElementById("meme1"); // CHANGE ?
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
  /*
  var url = memeUrl.innerText;
  var top = topTxt.innerText;
  var btm = btmTxt.innerText;
  */
  ++memeCount;
  let newMeme = document.createElement("div");
  newMeme.innerHTML = document.getElementById("memeTmplt").innerHTML;
  newMeme.className = "meme-wrapper";
  document.getElementById("meme-flexbox").appendChild(newMeme);
  newMeme.firstElementChild.src = memeUrl; // sets img src of newMeme div
  newMeme.children[1].innerText = topTxt; // set val of top text input from form
  newMeme.children[2].innerText = btmTxt; // set val of btm text input from form
  newMeme.id = "meme" + memeCount; // sets id of meme wrapper, can refer to delete later

  //switchTo(newInput);
}
