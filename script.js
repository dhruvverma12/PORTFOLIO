document.querySelector('.scroll-png').addEventListener('click', function() {
  // Scroll down by 200vh
  window.scrollTo({
    top: window.scrollY + window.innerHeight * 2, // 200vh
    behavior: 'smooth', // Use smooth scrolling
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector('.preloader');
  setTimeout(() => {
    gsap.to(loader, {
      y: '-100%',
      duration: 3,
    });
  }, 2000);
});



heroGsap();



function heroGsap(){
  const gt = gsap.timeline()

  gt.from('.navbar span',{
    y: -200,
    opacity: 0,
    delay: 1,
    duration: 2,
    stagger: 0.3
  })

  gt.from('.hero span',{
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.3
  })

  gt.from('.hero-footer a',{
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  })

  gt.from('.scroll-png',{
    duration: 1,
    yoyo: true,
    repeat: -1,
    y: 20
  })
}



