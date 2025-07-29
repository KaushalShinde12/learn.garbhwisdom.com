const mobile = window.innerWidth < 768;

// navbar
const headermain = document.querySelector(".header-main");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    headermain.classList.add("bg-black");
  } else {
    headermain.classList.remove("bg-black");
  }
});

// Accordion
window.addEventListener("load", () => {
  const dataAccordionContainer = document.querySelectorAll(
    "[data-accordion-container]"
  );

  dataAccordionContainer.forEach((accordionContainer) => {
    const theTabs = accordionContainer.querySelectorAll(".accordion-trigger");

    function theAccordionClicks(accordionClickEvent) {
      // const clickedTab = accordionClickEvent.currentTarget;
      const parentTab = this.parentElement;
      // console.log(parentTab);

      for (let i = 0; i < theTabs.length; i++) {
        // theTabs[i].classList.remove("active");
        if (parentTab.classList.contains("active")) {
          parentTab.classList.remove("active");
          break;
        } else {
          parentTab.classList.add("active");
          break;
        }
      }
      accordionClickEvent.preventDefault();
    }

    for (let i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theAccordionClicks, true);
    }
  });
});
window.addEventListener("load", () => {
  const dataAccordionContainer = document.querySelectorAll(
    "[data-accordion-container2]"
  );

  dataAccordionContainer.forEach((accordionContainer) => {
    const theTabs = accordionContainer.querySelectorAll(".accordion-trigger2");

    function theAccordionClicks(accordionClickEvent) {
      // const clickedTab = accordionClickEvent.currentTarget;
      const parentTab = this.parentElement;
      console.log(parentTab.classList);

      for (let i = 0; i < theTabs.length; i++) {
        // theTabs[i].classList.remove("active");
        if (parentTab.classList.contains("active")) {
          parentTab.classList.remove("active");
          break;
        } else {
          parentTab.classList.add("active");
          break;
        }
      }
      accordionClickEvent.preventDefault();
    }

    for (let i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theAccordionClicks, true);
    }
  });
});

// faq accordion
window.addEventListener("load", () => {
  const dataAccordionContainer = document.querySelectorAll(
    "[data-accordion-container-faq]"
  );

  dataAccordionContainer.forEach((accordionContainer) => {
    const theTabsParent =
      accordionContainer.querySelectorAll(".single-accordion");
    const theTabs = accordionContainer.querySelectorAll(".accordion-trigger");

    function theAccordionClicks(accordionClickEvent) {
      // const clickedTab = accordionClickEvent.currentTarget;
      const parentTab = this.parentElement;

      for (let i = 0; i < theTabsParent.length; i++) {
        if (theTabsParent[i] != parentTab) {
          theTabsParent[i].classList.remove("active");
        }
      }

      if (parentTab.classList.contains("active")) {
        parentTab.classList.remove("active");
      } else {
        parentTab.classList.add("active");
      }
      accordionClickEvent.preventDefault();
    }

    for (let i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theAccordionClicks);
    }
  });
});

// footer banner
const cards = document.querySelector(".footer-banner");
if (mobile) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      cards.classList.add("show-footer-banner");
    } else {
      cards.classList.remove("show-footer-banner");
    }
  });
}

// Open menu in mobile

const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".nav-main");

const toggleNav = () => {
  mainNav.classList.toggle("open");
};

hamburger.addEventListener("click", toggleNav);

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});

// Countdown timer

// Set the date we're counting down to
var countDownDate = new Date("Nov 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  const daysContainer = document.querySelectorAll(".days-container");
  const hoursContainer = document.querySelectorAll(".hours-container");
  const minutesContainer = document.querySelectorAll(".minutes-container");
  const secondsContainer = document.querySelectorAll(".seconds-container");

  // document.getElementById('timer').innerHTML =
  //   days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

  if (mobile) {
    daysContainer.forEach((day) => {
      day.innerHTML = days;
    });
    hoursContainer.forEach((hour) => {
      hour.innerHTML = hours;
    });
    minutesContainer.forEach((minute) => {
      minute.innerHTML = minutes;
    });
    secondsContainer.forEach((second) => {
      second.innerHTML = seconds;
    });
  } else {
    daysContainer.forEach((day) => {
      day.innerHTML = ":" + days;
    });
    hoursContainer.forEach((hour) => {
      hour.innerHTML = ":" + hours;
    });
    minutesContainer.forEach((minute) => {
      minute.innerHTML = ":" + minutes;
    });
    secondsContainer.forEach((second) => {
      second.innerHTML = ":" + seconds;
    });
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// Tiny slider

const mobileview = window.innerWidth < 990;

// logo-slider
const logoSlider = document.querySelector(".logo-slider");

if (logoSlider) {
  var logoSliderRef = tns({
    container: logoSlider,
    autoplayButtonOutput: false,
    mouseDrag: false,
    loop: true,
    gutter: 20,
    speed: 4000,
    controls: false,
    nav: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,

    responsive: {
      0: {
        items: 0.8,
      },

      768: {
        items: 2,
      },

      // 1024: {
      //   items: 4,
      // },

      // 1200: {
      //   items: 6,
      // },
    },
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const bannerSlider = document.querySelector(".banner");

if (bannerSlider) {
  var bannerSliderRef = tns({
    container: bannerSlider,
    autoplayButtonOutput: false,
    mouseDrag: false,
    loop: true,
    gutter: 20,
    speed: 10000,
    controls: false,
    nav: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,

    responsive: {
      0: {
        items: 0.6,
      },

      768: {
        items: 1.3,
      },
      1024: {
        items: 1.6,
      },
      1200: {
        items: 2.3,
      },
    },
  });
}

// Popup-Ad
let intervalID;

document.addEventListener("DOMContentLoaded", () => {
  let closebtn = document.querySelector(".close-btn");
  let popup = document.querySelector(".popup-ad");
  let popupSlider = document.querySelector(".popup-slider");

  const callTimeOut = (time) => {
    setTimeout(() => {
      popup.classList.remove("visible-popup");
      popupSlider.classList.remove("animate");
    }, time);
  };

  // pop-up after every 5min = 300000ms
  intervalID = setInterval(() => {
    popup.classList.add("visible-popup");
    popupSlider.classList.add("animate");
    callTimeOut(15000);
  }, 300000);

  closebtn.addEventListener("click", () => {
    popup.classList.remove("visible-popup");
    popupSlider.classList.remove("animate");
  });
});

const testimonialSlider = document.querySelector(".testimonial-slider");
if (testimonialSlider) {
  var testimonialSliderRef = tns({
    container: testimonialSlider,
    gutter: 20,
    items: 1,
    mouseDrag: false,
    nav: true,
    navPosition: "bottom",
    controls: false,
    speed: 500,
    loop: !mobile ? false : true,

    responsive: {
      // 0: {
      //   items: 1,
      //   autoplay: true,
      //   nav: true,
      //   // loop: true,
      // },
      768: {
        items: 2,
        startIndex: 0,
        nav: false,
        mouseDrag: true,
        autoplay: false,
        loop: false,
        // center: true,
      },
    },
  });
}
