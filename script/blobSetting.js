function updateBlobBorderRadius() {
  let blob = document.querySelector(".blog");

  if (window.innerWidth < 500) {
    blob.style.borderTopLeftRadius = "0px";
    blob.style.borderTopRightRadius = "0px";
  } else {
    blob.style.borderTopRightRadius = "";
    blob.style.borderTopLeftRadius = "";
  }
}

updateBlobBorderRadius();

// Add an event listener to respond to window resize
window.addEventListener("resize", updateBlobBorderRadius);
