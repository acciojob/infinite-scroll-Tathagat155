//your code here!
const list = document.getElementById("infi-list");

let count = 1;

// ---- 10 default items add ----
function addInitialItems() {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + count++;
    list.appendChild(li);
  }
}
addInitialItems();

// ---- 2 new items add function ----
function addMoreItems() {
  for (let i = 0; i < 2; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + count++;
    list.appendChild(li);
  }
}

// ---- Infinite Scroll Logic ----
list.addEventListener("scroll", function () {
  // Check if user reached the bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight-1) {
    addMoreItems();            // yaha -1 isliye kiye kyuki scrollHeight bara ho raha tha and function call nhi pa rha tha
  }
});

