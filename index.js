const badge = document.querySelector(".badge");
const tableDataHistory = document.querySelector("tbody");

const pressKey = (e) => {
  badge.innerText = `${e.keyCode}`;
  const getKey = document.querySelector(`button[data-key="${e.keyCode}"]`);
  getKey.classList.add("playing");

  tableDataHistory.innerHTML += `<tr>
      <th scope="col">${e.key.toUpperCase()}</th>
    </tr>`;
};

function removeTransition(e) {
  if (e.propertyName === "transform") return;

  this.classList.remove("playing");
}

function clearHistory() {
  tableDataHistory.innerHTML = ``;
}
window.addEventListener("keydown", pressKey);

let keys = document.querySelectorAll("button");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
document.querySelector(".clear").addEventListener("click", clearHistory);
