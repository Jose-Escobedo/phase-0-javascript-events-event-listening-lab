function addingEventListener(func) {
  const input = document.getElementById("input");
  input.addEventListener("click", func);
}

function func() {
  alert("I was clicked");
}

addingEventListener(func);
