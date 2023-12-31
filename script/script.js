
// ---------- Start Smooth Scroll: ----------
const links = document.querySelectorAll("nav a[href^='#']");
  links.forEach(link =>{
      link.addEventListener("click",scrollToSection);
  })
  getDistanceFromtheTop =(el)=>{
    const id = el.getAttribute("href");
    return document.querySelector(id).offsetTop;
   };

function scrollToSection (e){
  e.preventDefault()
  const distanceFromtheTop = getDistanceFromtheTop(e.target) - 90;
  smoothScrollTo(0,distanceFromtheTop)
};

 function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.scrollX;
    const startY = window.scrollY || window.scrollY;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== "undefined" ? duration : 100;
  
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  };
// ---------- Start Menu-Mobile ----------

const btnMobile = document.querySelector("#btn-mobile");
btnMobile.addEventListener('click',()=>{
  console.log('clicou')
  const nav = document.querySelector("nav");
  nav.classList.toggle('active')
})


// ---------- Start Changing Background: ----------
const clickBg = document.querySelector(".box-ch-background label");
clickBg.addEventListener("click",changeColorTxt);

 function changeColorTxt(){
    document.body.classList.toggle("active-light");
    document.querySelector(".percent-skills").classList.toggle("skillsBg");
}

// Repositioning boxChBackground
 respBxCh()
function respBxCh(){
  const boxChBackground = document.querySelector('.box-ch-background');
  const windowWidth = window.innerWidth;
  if(windowWidth <= 580){
    // document.querySelector('header > .container-xl').append(boxChBackground)
  }

}



// Projects Showcase: 
const imgProjects = document.querySelectorAll(".img-wrapper img");
// Select Image:
  imgProjects.forEach((img)=>{
    const highlightImg = img.parentElement.parentElement.previousElementSibling;
    highlightImg.style.backgroundImage= `url(${img.src})`;

    StyImgProjects(img)
    img.addEventListener('mouseover',function(){
      highlightImg.style.backgroundImage= `url(${img.src})`;

      imgProjects.forEach(img=>{
        img.style.border ='5px solid transparent';
      })     
     let alt= this.style.border ='5px solid #7c4dff';

    });
  });

 function StyImgProjects(img){
    imgProjects[0].style.border ='5px solid #7c4dff';
    img.style.border ='5px solid transparent';
    img.style.borderRadius ='20%';
    img.style.transition ='0.5s';
  }
    

  
















    

  










    



    




