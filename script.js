tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 40
    },
    shape: {
      type: "image",
      image: {
        src: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
        width: 32,
        height: 32
      }
    },
    size: {
      value: 20
    },
    move: {
      enable: true,
      speed: 2
    }
  }
});

tsParticles.load("tsparticles2", {
  particles: {
    number: {
      value: 40
    },
    shape: {
      type: "char",
      character: {
        value: "❤",
        font: "Verdana",
        style: "",
        weight: "400"
      }
    },
    size: {
      value: 20
    },
    move: {
      enable: true,
      speed: 2
    }
  }
});


// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});



let FristPage = document.querySelector(".fristvfx")
let SecondPage = document.querySelector(".ndpage2")
let Button = document.querySelector(".haanbtn")
let cursor = document.querySelector(".nocursor")

cursor.addEventListener("click", function(e){

  cursor.style.left = Math.random()*90 + "vw"
  cursor.style.top = Math.random()*90 + "vh"
  

})
Button.addEventListener("click",function(){
  if(FristPage.style.display = "block")
  {
      FristPage.style.display = "none"
  SecondPage.style.display = "flex"
  }
  })


// GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// make all scroll animations replay
ScrollTrigger.defaults({
  toggleActions:"play reverse play reverse"
});


// sync Lenis with ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


// FIRST PAGE TIMELINE
var main = gsap.timeline();

main.from(".fristh1",{
  y:-60,
  opacity:0,
  duration:1
})

.from(".h3hd",{
  x:100,
  opacity:0,
  duration:0.5
})

.from(".h4hd",{
  x:-100,
  opacity:0,
  duration:0.5
})

.from(".divs p",{
  y:80,
  opacity:0,
  duration:1
})


// PHOTO TITLE
gsap.from(".photo h1",{
  scrollTrigger:{
    trigger:".photo",
    start:"top 80%"
  },
  x:-100,
  opacity:0,
  duration:1
})

gsap.from(".photo i",{
  scrollTrigger:{
    trigger:".photo",
    start:"top 80%"
  },
  y:50,
  opacity:0,
  duration:1
})


// PIC 1
gsap.from(".pic1 img",{
  scrollTrigger:{trigger:".pic1",start:"top 85%"},
  x:-150,
  opacity:0,
  duration:1
})

gsap.from(".pic1 p",{
  scrollTrigger:{trigger:".pic1",start:"top 85%"},
  x:-80,
  opacity:0,
  duration:1
})


// PIC 2
gsap.from(".pic2 img",{
  scrollTrigger:{trigger:".pic2",start:"top 85%"},
  y:-120,
  opacity:0,
  duration:1
})

gsap.from(".pic2 p",{
  scrollTrigger:{trigger:".pic2",start:"top 85%"},
  x:120,
  opacity:0,
  duration:1
})


// PARA 1
gsap.from(".para1 p",{
  scrollTrigger:{trigger:".para1",start:"top 85%"},
  x:-120,
  opacity:0,
  duration:1
})


// PIC 3
gsap.from(".pic3 img",{
  scrollTrigger:{trigger:".pic3",start:"top 85%"},
  x:150,
  opacity:0,
  duration:1
})

gsap.from(".pic3 p",{
  scrollTrigger:{trigger:".pic3",start:"top 85%"},
  x:-100,
  opacity:0,
  duration:1
})


// PIC 4
gsap.from(".pic4 img",{
  scrollTrigger:{trigger:".pic4",start:"top 85%"},
  y:150,
  opacity:0,
  duration:1
})

gsap.from(".pic4 p",{
  scrollTrigger:{trigger:".pic4",start:"top 85%"},
  x:120,
  opacity:0,
  duration:1
})


// PARA 2
gsap.from(".para2 p",{
  scrollTrigger:{trigger:".para2",start:"top 85%"},
  x:-120,
  opacity:0,
  duration:1
})


// TWO IMAGES
gsap.from(".in1pic img",{
  scrollTrigger:{trigger:".twop",start:"top 85%"},
  x:-200,
  opacity:0,
  duration:1
})

gsap.from(".in2pic img",{
  scrollTrigger:{trigger:".twop",start:"top 85%"},
  x:200,
  opacity:0,
  duration:1
})


// PARA 3
gsap.from(".para3 p",{
  scrollTrigger:{trigger:".para3",start:"top 85%"},
  x:-120,
  opacity:0,
  duration:1
})


// GRID IMAGES
gsap.from(".under1 img",{
  scrollTrigger:{trigger:".under1",start:"top 85%"},
  x:120,
  opacity:0,
  duration:1
})

gsap.from(".under2 img",{
  scrollTrigger:{trigger:".under2",start:"top 85%"},
  x:-120,
  opacity:0,
  duration:1
})

gsap.from(".under3 img",{
  scrollTrigger:{trigger:".under3",start:"top 85%"},
  y:120,
  opacity:0,
  duration:1
})

gsap.from(".under4 img",{
  scrollTrigger:{trigger:".under4",start:"top 85%"},
  y:-120,
  opacity:0,
  duration:1
})


// LAST TEXT
gsap.from(".lastpara p",{
  scrollTrigger:{trigger:".lastpara",start:"top 85%"},
  scale:0.8,
  opacity:0,
  duration:1
})


// FINAL BOX
gsap.from(".lastdiv",{
  scrollTrigger:{
    trigger:".lastdiv",
    start:"top 80%"
  },
  scale:0.9,
  opacity:0,
  duration:1
})