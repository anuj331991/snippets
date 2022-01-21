/**
 * Event deleagtion means instead of attaching the listner to each and evey element attach it to the parent
 * and then point it to specific element
 */
document.getElementById("form").addEventListener("keyup", (e) => {
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

document.getElementById("sample").addEventListener("click", (e) => {
  console.log("bubbled");
});

document.getElementById("myBubble").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button event");
});
