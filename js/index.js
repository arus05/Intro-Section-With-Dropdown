const heroBgImg = document.getElementById("hero-bg-img");

function renderHeroBgImg(){
  if(window.matchMedia("(min-width: 800px)").matches){
    heroBgImg.src = "./../images/image-hero-desktop.png";
  }
  else{
    heroBgImg.src = "./../images/image-hero-mobile.png";
  }
}

window.matchMedia("(min-width: 800px)").addListener(renderHeroBgImg);

