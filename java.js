document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.count');

    function formatNumber(num) {
        return (num / 1000).toFixed(0) + 'K'; 
    }

    function animateCounter(counter) {
        let count = 0;
        const target = +counter.getAttribute('data-count');
        const speed = 1200; // 
        const increment = target / (speed / 100); // 
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            counter.textContent = formatNumber(Math.floor(count));
        }, 100);
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


  // Select the cursor dot element
  const cursorDot = document.querySelector(".cursor-dot");

  // Set up initial cursor dot position variables
  let mouseX = 0, mouseY = 0;

  // Track the cursor's actual position
  document.addEventListener("mousemove", (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
  });

  // Animate the dot to smoothly follow the cursor
  gsap.to(cursorDot, {
      x: () => mouseX,
      y: () => mouseY,
      ease: "power2.out",
      duration: 0.15
  });

  
  document.querySelector('.cards-number-input').oninput = () =>{
    document.querySelector('.cards-number-box').innerText = document.querySelector('.cards-number-input').value;
}

document.querySelector('.cards-holder-input').oninput = () =>{
    document.querySelector('.cards-holder-name').innerText = document.querySelector('.cards-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

$("#switch_id").change(function(){
    if($(this).is(":checked")){
        $(".yearly").show();
        $(".monthly").hide();
    }else {
        $(".yearly").hide();
        $(".monthly").show();
    }
})


let skilsContent = select('.skills-content');
if (skilsContent) {
 new Waypoint({
   element: skilsContent,
   offset: '80%',
   handler: function(direction) {
     let progress = select('.progress .progress-bar', true);
     progress.forEach((el) => {
       el.style.width = el.getAttribute('aria-valuenow') + '%'
     });
   }
 })
}

// Optional: Adjust the carousel interval speed
const testimonialCarousel = document.querySelector('#testimonialCarousel');
testimonialCarousel.addEventListener('slid.bs.carousel', () => {
    // Customize behavior after slide change if needed
});

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});