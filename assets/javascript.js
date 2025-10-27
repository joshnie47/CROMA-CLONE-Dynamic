const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const mobclose=document.getElementsByClassName("fa-rectangle-xmark");
const navTab = document.querySelector(".nav-tab");
const body = document.body;
closeBtn.style.display = "none";
navTab.style.display = "none";
menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";      
  closeBtn.style.display = "block";    
  navTab.style.display = "block";
  body.style.backgroundColor = "#2b2a2aff"
});
closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";    
  menuBtn.style.display = "block";   
  navTab.style.display = "none";   
  body.style.backgroundColor = "";   
});
for (let i = 0; i < mobclose.length; i++) {
  mobclose[i].addEventListener("click", () => {
    mobclose[i].style.display = "none";
    menuBtn.style.display = "block";
    navTab.style.display = "none";
    body.style.backgroundColor = "";
  });
}

const usercontainer = document.querySelector(".nav-tab2");
const inlist = document.querySelector(".navigation-2");
inlist.style.display="none";

usercontainer.addEventListener("mouseenter", () => {
  inlist.style.display="block";
  body.style.backgroundColor = "#2b2a2aff";
});

usercontainer.addEventListener("mouseleave", () => {
  inlist.style.display="none";
  body.style.backgroundColor = " ";
});

const container = document.querySelector(".image-container");

fetch("./assets/data.json")
  .then(res => res.json())
  .then(data => {
    data.images.forEach(img => {
      container.insertAdjacentHTML("beforeend", `<img src="${img}" alt="Image">`);
    });
  })
  .catch(err => console.error("Error:", err));
