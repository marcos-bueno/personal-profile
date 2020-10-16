class Portfolio {
  constructor(selector, appearPx, scrollSpd=50) {
    this.$selector = document.querySelector(selector);
    this.appearPx = appearPx;
    this.scrollSpd = scrollSpd;
    this.timeOut = null;
    this.isAutoScrolling = false;
    
    this.init();
  }
  init() {
    // Add event listeners for page scrolling
    document.addEventListener('mousewheel', 	  (e) => this.scrollHandler(e), false);
    document.addEventListener('DOMMouseScroll', (e) => this.scrollHandler(e), false);
    
    // Add event listener for click
    this.$selector.addEventListener('click', () => {
      this.$selector.classList.remove('ks-appear');
      this.scrollToTop();
    });
  }
  scrollHandler(e) {
    var offsetY = window.pageYOffset;

    if(!this.isAutoScrolling) {
      if(offsetY >= this.appearPx) {
          this.$selector.classList.add('ks-appear');
      }
      else {
          this.$selector.classList.remove('ks-appear');
      }
    }
  }
  scrollToTop() {
    this.isAutoScrolling = true;

    if(document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
      window.scrollBy(0, -this.scrollSpd);
      this.timeOut = setTimeout( () => { this.scrollToTop(); }, 10);
    }
    else {
      clearTimeout(this.timeOut);
      this.isAutoScrolling = false;
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var toTop = new Portfolio('#back-to-top', 200);
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}