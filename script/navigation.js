function cardClick(e) {
  console.log(e.target);
  if (!e.target.classList.value.includes("card-container")) return;
  localStorage.setItem("categoryId", e.target.id);
  window.location.href = "./play.php";
}

const addClickListener = (className) => {
  const element = document.querySelector(`.${className}`);
  if (element) {
    element.addEventListener("click", cardClick);
  }
};

addClickListener("popularCards");
addClickListener("categoriesCard");
