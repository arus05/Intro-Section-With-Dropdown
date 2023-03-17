const heroBgImg = document.getElementById("hero-bg-img");
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const featuresNav = document.getElementById("features-link");
const featuresList = document.getElementById("features-list");
const companyNav = document.getElementById("company-link");
const companyList = document.getElementById("company-list");

function handleQuery800(){
  if(window.matchMedia("(min-width: 800px)").matches){
    heroBgImg.src = "./../images/image-hero-desktop.png";
  }
  else{
    heroBgImg.src = "./../images/image-hero-mobile.png";
  }
  
  nav.classList.remove("toggled");
}

window.matchMedia("(min-width: 800px)").addListener(handleQuery800);

menuBtn.addEventListener("click", ()=>{
  nav.classList.toggle("toggled");
})

featuresNav.addEventListener("click", (event)=>{
  event.stopPropagation();
  featuresList.classList.toggle("features-toggled");
  if(featuresList.classList.contains("features-toggled")){
    companyList.classList.remove("company-toggled");
  }
})

companyNav.addEventListener("click", ()=>{
  event.stopPropagation();
  companyList.classList.toggle("company-toggled");
  if(companyList.classList.contains("company-toggled")){
    featuresList.classList.remove("features-toggled");
  }
})

// document.body.addEventListener("click", ()=>{
//   featuresList.classList.remove("features-toggled");
//   companyList.classList.remove("company-toggled");
// })