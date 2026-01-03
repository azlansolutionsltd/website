// Navar icon change

const navbarToggler = document.querySelector('.navbar-toggler');
const icon = document.querySelector('#icon');

navbarToggler.addEventListener('click', () => {
  icon.classList.toggle('fa-times');
});

//Navbar Hide
let navLink = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navLink.forEach(a => {
  a.addEventListener('click', () => {
    navCollapse.classList.remove('show');
  });
});

// Active Counter

function startCounter(element, maxCount, intervalTime) {
  let count = 1;
  const updateCounter = () => {
    if (count < maxCount) {
      count++;
      element.innerHTML = `${count}+`;
    } else {
      clearInterval(counterInterval);
    }
  };
  const counterInterval = setInterval(updateCounter, intervalTime);
}

// Select elements
const applications = document.querySelector('#applications');
const client = document.querySelector('#Client');
const experience = document.querySelector('#experience');
const tMember = document.querySelector('#Tmember');

// Start counters
startCounter(applications, 5, 200);
startCounter(client, 3, 200);
startCounter(experience, 10, 200);
startCounter(tMember, 10, 200);

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
