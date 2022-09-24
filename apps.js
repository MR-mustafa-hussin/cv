let t1 = new gsap.timeline();
t1.from(".cover-head", 1, {
  opacity: 0,
  xPercent: -100,
  delay: 0.5,
  ease: "power1.out",
});
t1.from(".dot", 1, {
  opacity: 0,
  yPercent: 100,
  yoyo: true,
  ease: "power1.out",
  delay: 0.1,
});
t1.to(".dot", 0.5, {
  x: 200,
  ease: "power1.out",
});
t1.to(".dot", 0.5, {
  x: 25,
  ease: "power1.out",
});
t1.to(".dot", 0.5, {
  x: 150,
  ease: "power1.out",
});
t1.to(".dot", 0.1, {
  x: -10,
  ease: "power1.out",
});
t1.to(".cover-head", 0.5, {
  x: -300, // move to x-axis => 300px
  opacity: 0,
  yoyo: true,
  ease: "power1.out",
});
t1.to(".dot", 0.5, {
  opacity: 0,
  ease: "power1.out",
});
t1.to(
  ".cover",
  1,
  {
    xPercent: -100, // such as transform:"translatX(-100%)"
    ease: "power1.out",
  },
  4.8
);
t1.to(
  ".cover-2",
  1,
  {
    xPercent: -100,
    ease: "power1.out",
  },
  5.2
);
t1.to(
  ".cover-3",
  1,
  {
    xPercent: -100,
    ease: "power1.out",
  },
  5.4
);
t1.to(
  ".cover-4",
  1,
  {
    xPercent: -100,
    ease: "power1.out",
  },
  5.4
);
t1.from(".last-cover", 1, {
  yPercent: -100,
  ease: "power1.out",
  opacity: 0,
});
t1.from(".cover-5", 1, {
  opacity: 0,
  delay: 0.3,
  ease: "power1.out",
});
let heading = document.querySelector(".left-slide .name");
let span = document.querySelectorAll(".left-slide .name span");
let replaceEle = heading.querySelectorAll("span:not([data-char='.'])");
console.log(replaceEle);

t1.set(span, {});
t1.to(span, 1, {
  yPercent: 0,
  staggerTo: 0.05,
  ease: "expo.inOut",
}).to(replaceEle, 1, {
  yoyo: true,
  ease: "expo.inOut",
  staggerTo: 0.05,
  y: 60,
  repeat: -1,
});
// logo animation
let one = document.querySelector(".one");
(two = document.querySelector(".two")),
  (three = document.querySelector(".three")),
  (four = document.querySelector(".four"));
const items = [one, two, three, four];

t1.staggerFrom(items, 0.5, {
  xPercent: 100,
  opacity: 0,
  ease: "power1.out",
  stagger: {
    amount: 0.2,
  },
});

t1.from(
  ".left-slide",
  2,
  {
    opacity: 0,
    ease: "power1.out",
  },
  8
);
t1.from(
  ".right-slide",
  1,
  {
    xPercent: 100,
    opacity: 0,
    ease: "power1.out",
  },
  8.3
);
const socialSlide = document.querySelector(".social-slide");

socialSlide.addEventListener("wheel", (e) => {
  e.preventDefault();
  console.log(e.deltaY);
  socialSlide.scrollLeft += e.deltaY;
});
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 100) {
    document.querySelector("header").classList.add("scroll");
  } else {
    document.querySelector("header").classList.remove("scroll");
  }
});
// Dynamic Writer
// let words = ["I'am Front-End Developer",""]
let socialListItems = document.querySelectorAll(".social-list li a");
let select = document.querySelectorAll(".dots .select");
socialListItems.forEach((e) => {
  e.addEventListener("pointerenter", mouseenter);
});
function mouseenter(e) {
  const target = e.target;
  gsap.to(select, 1, {
    x: target.offsetLeft - 60,
    ease: Elastic.easeOut.config(1, 1),
  });
}

var slider = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 100,
  centeredSlides: true,
  mousewheel: {
    enabled: true,
    sensitivity: 5.5,
  },
});
slider.on("slideChange", () => {
  TweenMax.to(".slide-text span", 0.2, {
    y: "-100px",
  });
  TweenMax.to(".slide-number span", 0.2, {
    x: "-100px",
  });
  TweenMax.to(".swiper-slide-active", 0.5, {
    scale: 0.8,
    opacity: 0.8,
  });
});
slider.on("slideChangeTransitionEnd", () => {
  TweenMax.to(".slide-text span", 0.2, {
    y: 0,
    delay: 0.5,
  });
  TweenMax.to(".slide-text span", 0, {
    y: 100,
  });
  TweenMax.to(".slide-number span", 0.2, {
    x: 0,
    delay: 0.5,
  });
  TweenMax.to(".slide-text span", 0, {
    x: 100,
  });
  TweenMax.to(".swiper-slide-active", 0.5, {
    scale: 1,
    opacity: 1,
    ease: Power4.easeOut,
  });
});

// Owl Carousel
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 50,
  autoplay: true,
  nav: false,
  dots: false,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// Moda Yoga
function modalOpen(modalType) {
  document.querySelector("." + modalType).classList.add("active");
}
// close Modal
function modalClose(modalType) {
  document.querySelector("." + modalType).classList.remove("active");
}

let t2 = new TimelineMax({ paused: true, reversed: true });
document.querySelector(".burger").onclick = () => {
  document.querySelector("header.goUp ul").classList.toggle("active");
  t2.reversed() ? t2.play() : t2.reverse();
};
t2.to(".line-two", 0.2, {
  scaleX: 0,
  ease: Power1.easeInOut,
})
  .to(".line-one", 0.2, {
    y: 5,
    ease: Power1.easeInOut,
  })
  .to(".line-three", 0.2, {
    y: -5,
    ease: Power1.easeInOut,
  })
  .to(".burger", 0.2, {
    rotation: 360,
    ease: Power1.easeInOut,
  })
  .to(".line-one", 0.2, {
    rotation: 45,
    y: 10,
    ease: Power1.easeInOut,
  })
  .to(".line-three", 0.2, {
    rotation: -45,
    y: -5,
    ease: Power1.easeInOut,
  });

// add active class for item link

document.querySelectorAll("header.smallpage ul .item").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".burger").click();
  });
});
var sceneone = document.getElementById("sence1");
var parallaxInstance1 = new Parallax(sceneone);
var scenetwo = document.getElementById("sence2");
var parallaxInstance2 = new Parallax(scenetwo);
var scenethree = document.getElementById("sence3");
var parallaxInstance3 = new Parallax(scenethree);
var scenefour = document.getElementById("sence4");
var parallaxInstance4 = new Parallax(scenefour);
// add cursot style
document.querySelector("html").addEventListener("mousemove", (e) => {
  
  document.querySelector(".cursor").style.left = e.clientX + "px";
  document.querySelector(".cursor").style.top = e.clientY + "px";
  
});
document.querySelectorAll(".item").forEach((e) => {
  e.addEventListener("mouseenter", () => {
    document.querySelector(".cursor").classList.add("nav-items-cursor");
  });
  e.addEventListener("mouseleave", () => {
    document.querySelector(".cursor").classList.remove("nav-items-cursor");
  });
});
let skills = document.querySelectorAll(".skills .skill li span span");
let skillsRate = document.querySelectorAll(".skills .skill-header div");
console.log(skills);
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1100) {
    skills.forEach((e) => {
      e.style.width = `${e.dataset.value}`;
    });
    skillsRate.forEach((e) => {
      e.classList.add("active");
    });
  } else {
    skills.forEach((e) => {
      e.style.width = `0px`;
    });
    skillsRate.forEach((e) => {
      e.classList.remove("active");
    });
  }
});
var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function checkInput(val) {
  if (val == "email") {
    if (!event.target.value.match(validRegex)) {
      document.querySelector(`.input-border.${val}`).style.backgroundColor =
        "rgb(255, 34, 83)";
      document.querySelector(`.input-border.${val}`).classList.add("active");
    } else {
      document.querySelector(`.input-border.${val}`).style.backgroundColor =
        "#08fdd8";
      document.querySelector(`.input-border.${val}`).classList.add("active");
    }
  } else if (val == "message") {
    if (event.target.value == 0) {
      document.querySelector(`.input-border.${val}`).style.backgroundColor =
        "rgb(255, 34, 83)";
      document.querySelector(`.input-border.${val}`).classList.add("active");
    } else {
      document.querySelector(`.input-border.${val}`).style.backgroundColor =
        "#08fdd8";
      document.querySelector(`.input-border.${val}`).classList.add("active");
    }
  } else if (val == "name" || val == "subject") {
    if (event.target.value == 0) {
      document.querySelector(`.input-border.${val}`).classList.remove("active");
    } else {
      document.querySelector(`.input-border.${val}`).style.backgroundColor =
        "#08fdd8";
      document.querySelector(`.input-border.${val}`).classList.add("active");
    }
  }
}

// submit form
document.querySelector(".submit").onclick = () => {
  let textarea = document.querySelector("textarea");
  let emailMessage = document.querySelector("input[type='email']");
  let coverFive = document.querySelector(".cover-5");
  console.log("done");
  if (textarea.value == 0 || emailMessage.value == 0) {
    var errorMessage = document.createElement("div");
    errorMessage.textContent = "Please fill in all require fields";
    errorMessage.classList.add("err");
    coverFive.appendChild(errorMessage);
    setTimeout(() => {
      errorMessage.remove();
    }, 3000);
  } else {
    document.querySelector(".loader").classList.add("active");
    setTimeout(() => {
      document.querySelector(".loader").classList.remove("active");
      var successMsg = document.createElement("div");
      successMsg.textContent = "Your email is successfully. Thank you";
      successMsg.classList.add("success");
      coverFive.appendChild(successMsg);
      setTimeout(() => {
        successMsg.remove();
      }, 3000);
    }, 6000);
  }
};

