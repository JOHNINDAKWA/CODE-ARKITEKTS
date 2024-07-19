// side bar start

function openNav() {
  "use strict";
  const sidepanel = document.getElementById("mysidepanel");
  if (sidepanel) {
    sidepanel.style.left = "0";
  } else {
    console.error("error: side panel not found");
  }
}

function closeNav() {
  "use strict";
  const sidepanel = document.getElementById("mysidepanel");
  if (sidepanel) {
    sidepanel.style.left = "-320px";
  } else {
    console.error("error: side panel not found");
  }
}

// searchbar
function open_search() {
  "use strict";
  const searchpanel = document.getElementById("search-bar");
  if (searchpanel) {
    searchpanel.style.height = "100vh";
    searchpanel.style.borderRadius = "0";
  } else {
    console.error("error: search panel not found");
  }
}

function close_search() {
  "use strict";
  const searchpanel = document.getElementById("search-bar");
  if (searchpanel) {
    searchpanel.style.height = "0vh";
    searchpanel.style.borderTopLeftRadius = "100%";
    searchpanel.style.borderTopRightRadius = "100%";
  } else {
    console.error("error: search panel not found");
  }
}

function toggleRight() {
  "use strict";
  const sidepanel = document.getElementById("right-side");
  if (sidepanel) {
    if (sidepanel.style.left === "0px") {
      closeRight();
    } else {
      openRight();
    }
  } else {
    console.error("error: side panel not found");
  }
}

function openRight() {
  "use strict";
  const sidepanel = document.getElementById("right-side");
  sidepanel.style.left = "0";
  document.addEventListener('click', outsideClickListener);
}

function closeRight() {
  "use strict";
  const sidepanel = document.getElementById("right-side");
  sidepanel.style.left = "-355px";
  document.removeEventListener('click', outsideClickListener);
}

function outsideClickListener(event) {
  const sidepanel = document.getElementById("right-side");
  const button = document.querySelector('.open-rightsidebar');
  if (!sidepanel.contains(event.target) && !button.contains(event.target)) {
    closeRight();
  }
}


// to handle the click event on the "More" link and the plus button
document.getElementById('more-link').addEventListener('click', function(event) {
  event.preventDefault();
  var pages = document.getElementById('pages');
  if (pages.classList.contains('show')) {
    pages.classList.remove('show');
  } else {
    pages.classList.add('show');
  }
});



//portfolio gallery tab

function open_img(evt, cityName) {
  let i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove active class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the selected tab content and mark the corresponding tab link as active
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// responsive client slide

$(".sliderlogo").slick({
  arrows: false,
  dots: false,
  infinite: false,
  autoplay: true,
  speed: 100,
  slidesToShow: 5,
  sliderToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        sliderToScroll: 1,
        autoplay: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        sliderToScroll: 1,
        autoplay: true,
      },
    },
  ],
});

// responsive team slider

$(".team-slider").slick({
  arrows: false,
  dots: true,
  infinite: false,
  autoplay: true,
  speed: 100,
  slidesToShow: 4,
  sliderToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 3,
        sliderToScroll: 1,
        autoplay: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        slidesToShow: 3,
        sliderToScroll: 1,
        autoplay: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        slidesToShow: 1,
        sliderToScroll: 1,
        autoplay: true,
      },
    },
  ],
});

// accordion section
document.addEventListener("DOMContentLoaded", function () {
  let accordionButtons = document.querySelectorAll(".accordion-button");
  let acoimg = document.querySelectorAll(".accordion-button img");

  accordionButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      let collapse = this.parentElement.nextElementSibling;

      // close all the other accordion items
      accordionButtons.forEach(function (otherButton, otherIndex) {
        if (otherButton !== button) {
          let otherCollapse = otherButton.parentElement.nextElementSibling;
          otherCollapse.style.maxHeight = null;

          // reset the image source and rotation for other accordion
          acoimg[otherIndex].src = "Images/icon/plus.png";
          acoimg[otherIndex].style.transform = "rotate(90deg)";
          otherButton.style.backgroundColor = "#fff";
        }
      });

      // toggle the clicked accordion item
      if (collapse.style.maxHeight) {
        collapse.style.maxHeight = null;
        // reset the image source, rotation, and background color when collapsing
        acoimg[index].src = "Images/icon/plus.png";
        acoimg[index].style.transform = "rotate(90deg)";
        button.style.backgroundColor = "";
      } else {
        collapse.style.maxHeight = collapse.scrollHeight + "px";
        // change the image source, set rotation, and background color when expanding
        acoimg[index].src = "Images/icon/menus.png";
        acoimg[index].style.transform = "rotate(180deg)";
        button.style.backgroundColor = "#c1b0b5";
      }
    });
  });
});

// footer validation start
const form = document.getElementById("footer-form");
const footerMessage = document.getElementById("footer-message");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  footerMessage.innerHTML = "Form Submitted successfully";
  footerMessage.style.display = "flex";
  form.reset();
  setTimeout(() => {
    footerMessage.style.display = "none";
  }, 3000);
});

// Button back to top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  const scrollToTopBtn = document.documentElement || document.body;
  scrollToTopBtn.scrollIntoView({
    behavior: "smooth",
  });
}
