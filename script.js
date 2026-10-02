document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu?.addEventListener("click", () => {
  const open = nav.dataset.open === "true";
  nav.dataset.open = String(!open);
  nav.style.display = open ? "" : "flex";
  if (!open) {
    Object.assign(nav.style,{position:"absolute",top:"72px",left:"0",right:"0",padding:"22px",background:"#f4eee6",flexDirection:"column",alignItems:"center"});
  }
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= 850 && nav.dataset.open === "true") {
      nav.dataset.open = "false"; nav.style.display = "";
    }
  });
});
