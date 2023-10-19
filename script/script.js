

// Start Smooth Scroll:
getDistanceFromtheTop =(el)=>{
 const id = el.getAttribute("href");
 return document.querySelector(id).offsetTop
};

 function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.scrollX;
    const startY = window.scrollY || window.scrollY;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== "undefined" ? duration : 400;
  
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

scrollToSection =(e)=>{
    e.preventDefault()
    const distanceFromtheTop = getDistanceFromtheTop(e.target) - 90;
    smoothScrollTo(0,distanceFromtheTop)
};

const links = document.querySelectorAll("nav a[href^='#']");
    links.forEach(link =>{
        link.addEventListener("click",scrollToSection);
    })
// End Smooth Scroll:
// -------------------------------------------

// Start Changing Background :
const clickBg = document.querySelector(".box-ch-background label");
clickBg.addEventListener("click",changeColorTxt);

 function changeColorTxt(){
    document.body.classList.toggle("active-light");
    document.querySelector(".percent-skills").classList.toggle("skillsBg");
}
// -------------------------------------------    

// Projects Showcase: 
const imgProjects = document.querySelectorAll(".img-wrapper img");
const highlightImg =  document.querySelectorAll(".highlight-img");
const projectsBox = document.querySelectorAll(".projects-box");



   imgProjects.forEach((item)=>{ 
     item.style.border = '5px solid transparent';
     imgProjects[0].style.border= '4px solid #7c4dff'
  
       highlightImg[0].style.backgroundImag ? '': highlightImg[0].style.backgroundImage = `url(${imgProjects[0].src})`;

     item.addEventListener('click', function() {
        highlightImg[0].style.backgroundImage = `url(${item.src})`;
        imgProjects.forEach(item =>{
         item.style.border ='5px solid transparent';
       });
        this.style.border ='5px solid #7c4dff';
     });
   })
   

  //  CONFIGURAR ALTERAÇAO DE IMAGENS:
   imgProjects.forEach((item)=>{ 
    item.style.border = '5px solid transparent';
    imgProjects[0].style.border= '4px solid #7c4dff'
 
      highlightImg[1].style.backgroundImag ? '': highlightImg[1].style.backgroundImage = `url(${imgProjects[0].src})`;

    item.addEventListener('click', function() {
       highlightImg[1].style.backgroundImage = `url(${item.src})`;
       imgProjects.forEach(item =>{
        item.style.border ='5px solid transparent';
      });
       this.style.border ='5px solid #7c4dff';
    });
  })
  















    

  










    



    




