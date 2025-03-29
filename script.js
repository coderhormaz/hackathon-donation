const lerp = (x, y, a) => x * (1 - a) + y * a;

function cursorAnim() {
  const crsr = document.querySelector(".cursor");
  const main = document.querySelector(".main");
  const nav = document.querySelector("nav");
  const h1s = document.querySelectorAll(".hero h1");

  h1s.forEach((h1) => {
    h1.addEventListener("mouseenter", () => {
      gsap.to(crsr, {
        scale: 8,
      });
    });
    h1.addEventListener("mouseleave", () => {
      gsap.to(crsr, {
        scale: 1,
      });
    });
  });

  main.addEventListener("mousemove", (e) => {
    gsap.to(crsr, {
      x: e.x + "px",
      y: e.y + "px",
      duration: 0.2,
      ease: Expo,
    });
  });
  nav.addEventListener("mouseenter", () => {
    gsap.to(crsr, {
      opacity: 0,
      scale: 0,
    });
  });
  nav.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      opacity: 1,
      scale: 1,
    });
  });
  main.addEventListener("mouseenter", () => {
    gsap.to(crsr, {
      opacity: 1,
      scale: 1,
    });
  });
  main.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      opacity: 0,
      scale: 0,
    });
  });
}

function servicePageAnim() {
  const servicePage = document.querySelector(".services");
  const aboutPage = document.querySelector(".about");
  const eventsPage = document.querySelector(".events");
  const hoverText = document.querySelector(".services .hover-texts .hover-top");
  const hoverText1 = document.querySelector(
    ".services .hover-texts1 .hover-top1"
  );

  const firstWord = document.querySelector(
    ".services .hover-texts .hover-top .first"
  );
  const secondWord = document.querySelector(
    ".services .hover-texts .hover-top .second"
  );
  const thirdWord = document.querySelector(
    ".services .hover-texts .hover-top .third"
  );
  const fourthWord = document.querySelector(
    ".services .hover-texts .hover-top .fourth"
  );
  const fifthWord = document.querySelector(
    ".services .hover-texts .hover-top .fifth"
  );
  const sixthWord = document.querySelector(
    ".services .hover-texts .hover-top .sixth"
  );
  const seventhWord = document.querySelector(
    ".services .hover-texts .hover-top .seventh"
  );
  const eightWord = document.querySelector(
    ".services .hover-texts .hover-top .eight"
  );
  const ninthWord = document.querySelector(
    ".services .hover-texts .hover-top .ninth"
  );

  const firstWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .first1"
  );
  const secondWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .second1"
  );
  const thirdWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .third1"
  );
  const fourthWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .fourth1"
  );
  const fifthWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .fifth1"
  );
  const sixthWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .sixth1"
  );
  const seventhWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .seventh1"
  );
  const eightWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .eight1"
  );
  const ninthWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .ninth1"
  );
  const tenthWord1 = document.querySelector(
    ".services .hover-texts1 .hover-top1 .tenth1"
  );

  hoverText.addEventListener("mouseenter", () => {
    servicePage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    aboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    eventsPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    hoverText.style.color = "White";
    firstWord.style.transform = "translate(-6vw,-6vw) rotate(-10deg)";
    secondWord.style.transform = "translate(-2vw,-3vw) rotate(-10deg)";
    thirdWord.style.transform = "translate(-1vw,3vw) rotate(10deg)";
    fourthWord.style.transform = "translate(0vw,0vw) rotate(-10deg)";
    fifthWord.style.transform = "translate(-1vw,5vw) rotate(10deg)";
    sixthWord.style.transform = "translate(-1vw,-1vw) rotate(6deg)";
    seventhWord.style.transform = "translate(-1vw,1vw) rotate(-8deg)";
    eightWord.style.transform = "translate(-1vw,1vw) rotate(-10deg)";
    ninthWord.style.transform = "translate(-1vw,1vw) rotate(10deg)";
  });
  hoverText.addEventListener("mouseleave", () => {
    servicePage.style.backgroundColor = "white";
    aboutPage.style.backgroundColor = "white";
    eventsPage.style.backgroundColor = "white";
    hoverText.style.color = "Black";
    firstWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    secondWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    thirdWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    fourthWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    fifthWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    sixthWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    seventhWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    eightWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
    ninthWord.style.transform = "translate(0vw,0vw) rotate(0deg)";
  });
  hoverText1.addEventListener("mouseenter", () => {
    servicePage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    aboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    eventsPage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    hoverText1.style.color = "White";
    firstWord1.style.transform = "translate(-6vw,-6vw) rotate(-10deg)";
    secondWord1.style.transform = "translate(-2vw,-3vw) rotate(-10deg)";
    thirdWord1.style.transform = "translate(-1vw,3vw) rotate(10deg)";
    fourthWord1.style.transform = "translate(0vw,0vw) rotate(-10deg)";
    fifthWord1.style.transform = "translate(-1vw,5vw) rotate(10deg)";
    sixthWord1.style.transform = "translate(-1vw,-1vw) rotate(6deg)";
    seventhWord1.style.transform = "translate(-1vw,1vw) rotate(-8deg)";
    eightWord1.style.transform = "translate(-1vw,1vw) rotate(-10deg)";
    ninthWord1.style.transform = "translate(-1vw,1vw) rotate(10deg)";
    tenthWord1.style.transform = "translate(-1vw,1vw) rotate(-10deg)";
  });
  hoverText1.addEventListener("mouseleave", () => {
    servicePage.style.backgroundColor = "white";
    aboutPage.style.backgroundColor = "white";
    eventsPage.style.backgroundColor = "white";
    hoverText1.style.color = "Black";
    firstWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    secondWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    thirdWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    fourthWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    fifthWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    sixthWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    seventhWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    eightWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    ninthWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
    tenthWord1.style.transform = "translate(0vw,0vw) rotate(0deg)";
  });
}

function navAnim() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.onscroll = () => [
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 550;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector(`nav a[href*=` + id + `]`)
            .classList.add("active");
        });
      }
    }),
  ];
}

function magneticEffect() {
  const starIcon = document.querySelector(".about .about-text p img");
  const crsr = document.querySelector(".cursor");

  if (starIcon) {
  starIcon.addEventListener("mousemove", (e) => {
    const dim = starIcon.getBoundingClientRect();
    const xstart = dim.x;
    const xend = dim.x + dim.width;

    const ystart = dim.y;
    const yend = dim.y + dim.height;

    const zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, e.clientX);
    const zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, e.clientY);

    gsap.to(crsr, {
      scale: 3,
    });
    gsap.to(starIcon, {
      x: lerp(-20, 20, zeroone),
      y: lerp(-20, 20, zerotwo),
      duration: 0.6,
    });
  });
  starIcon.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      scale: 1,
    });
    gsap.to(starIcon, {
      x: 0,
      y: 0,
      duration: 0.6,
    });
  });
  }
}

function magneticEffectTag() {
  const tag = document.querySelector(".tag");
  const crsr = document.querySelector(".cursor");

  if (tag) {
  tag.addEventListener("mousemove", (e) => {
    const dim = tag.getBoundingClientRect();
    const xstart = dim.x;
    const xend = dim.x + dim.width;

    const ystart = dim.y;
    const yend = dim.y + dim.height;

    const zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, e.clientX);
    const zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, e.clientY);

    gsap.to(crsr, {
      scale: 3,
    });
    gsap.to(tag, {
      x: lerp(-20, 20, zeroone),
      y: lerp(-20, 20, zerotwo),
      duration: 0.6,
    });
  });
  tag.addEventListener("mouseleave", () => {
    gsap.to(crsr, {
      scale: 1,
    });
    gsap.to(tag, {
      x: 0,
      y: 0,
      duration: 0.6,
    });
  });
  }
}

function loaderAnim() {
  const loader = document.querySelector(".loader");
  const loaderH1 = document.querySelector(".loader h1");

  gsap.to(loaderH1, {
    delay: 0.5,
    duration: 1,
    opacity: 0,
    y: -100,
  });
  gsap.to(loader, {
    delay: 1.4,
    duration: 1,
    opacity: 0,
    display: "none",
  });
}

function simplePageAnims() {
  gsap.from(".hero h1, .hero h2, .hero .one, .hero .profile", {
    y: 100,
    opacity: 0,
    delay: 2,
    duration: 0.7,
    stagger: 0.1,
  });
  gsap.from(".home nav", {
    y: -100,
    opacity: 0,
    delay: 2,
    duration: 0.7,
  });
  gsap.to(".hero h4", {
    opacity: 1,
    duration: 1,
    delay: 2.5,
    repeat: -1,
    yoyo: true,
  });
  gsap.to("#hero-btn", {
    y: 20,
    repeat: -1,
    duration: 0.7,
    yoyo: true,
  });
}

// Razorpay Payment Integration
function setupRazorpayPayment() {
  const razorpayBtn = document.getElementById("razorpay-btn");
  
  if (razorpayBtn) {
    razorpayBtn.addEventListener("click", function() {
      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your actual Razorpay key
        amount: "50000", // Amount in paise (500 INR)
        currency: "INR",
        name: "Urbania Welfare",
        description: "Donation to support our community programs",
        image: "./assets/icecream.png",
        handler: function(response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
          // You can add code here to record the donation in your database
        },
        prefill: {
          name: "",
          email: "",
          contact: ""
        },
        theme: {
          color: "#3399cc"
        }
      };
      
      const rzp = new Razorpay(options);
      rzp.open();
    });
  }
}

// Strike Bitcoin Payment
function setupStrikePayment() {
  const strikeBtn = document.getElementById("strike-btn");
  
  if (strikeBtn) {
    strikeBtn.addEventListener("click", function() {
      // Replace with actual Strike integration when implemented
      window.open("https://strike.me/yourstrikeusername", "_blank");
      // Alternatively, you can use their API for deeper integration
    });
  }
}

// Form validation for contact form
function setupFormValidation() {
  const contactForm = document.querySelector(".contact-form form");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      // You can add additional validation logic here if needed
      // For now, the HTML5 validation (required attributes) will handle basic validation
    });
  }
}

// Newsletter Subscription
function setupNewsletterForm() {
  const newsletterForm = document.querySelector(".newsletter-form");
  
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(e) {
      // Additional validation or tracking can be added here
    });
  }
}

// Initialize all functions
window.addEventListener("DOMContentLoaded", function() {
  cursorAnim();
servicePageAnim();
navAnim();
magneticEffect();
magneticEffectTag();
loaderAnim();
simplePageAnims();
  
  // New functionality
  setupRazorpayPayment();
  setupStrikePayment();
  setupFormValidation();
  setupNewsletterForm();
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navbar = document.querySelector("#navbar");
  
  if (mobileMenuBtn && navbar) {
    mobileMenuBtn.addEventListener("click", function() {
      navbar.classList.toggle("active");
    });
  }
});


/* ===( Creative By : coder hormaz )=== */