pageTransition = () => {
  var timeline = gsap.timeline();

  timeline.to("header", {
      zIndex: 2
  });

  timeline.to(".page-transition", {
      duration: 1,
      height: "100%",
      top: "0%"
  });

  timeline.to(".page-transition", {
      duration: .8,
      height: "100%",
      top: "100%",
      delay: .3
  });

  timeline.set(".page-transition", {
      top: "-100%"
  });
}

mainAnimation = () => {
  var timeline = gsap.timeline();
  
  timeline.from(".container, .menu-items li", {
      duration: 1,
      y: 30,
      opacity: 0,
      stagger: {
          amount: .4
      },
      delay: .8
  });
}

delay = (n) => {
  n = n || 2000;
  return new Promise((done)=> {
      setTimeout(()=> {
          done();
      }, n);
  })
}

barba.init({
  sync: true,
  transitions: [
      {
          async leave(data){
              const done = this.async();
              pageTransition();
              await delay(1000);
              done();
          },

          async enter (data){
              mainAnimation();
          },

          async once(data){
              mainAnimation();
          }
      }
  ]
});


// JAVASCRIPT
const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});


// ======= Toggle NavBar Menu =======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-items");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu(){
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// ======= Close NavBar Menu When Links Is clicked =======

// const navLinks = document.querySelectorAll(".navLinks");
// navLinks.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu(){
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }