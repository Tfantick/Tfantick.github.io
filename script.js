var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: false,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: false,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: false,
        translate: ["120%", 0, -500],
      },
    },
  });
  var swiper3 = new Swiper(".mySwiper3", {
    grabCursor: false,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: false,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });

  Nutshell.setOptions({
    startOnLoad: true, // Start Nutshell on load? (default: true)
    lang: 'en', // Language (default: 'en', which is English)
    dontEmbedHeadings: true, // If 'true', removes the "embed this as a nutshell" option on headings
  });
  function openModal() {

    document.getElementById('modal').style.display = 'block';

}

function openModal2() {
    
  document.getElementById('modal2').style.display = 'block';

}

function openModal3() {
    
  document.getElementById('modal3').style.display = 'block';

}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}



window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

function closeModal2() {
  document.getElementById('modal2').style.display = 'none';
}



window.addEventListener('click', function(event) {
if (event.target == modal2) {
  modal2.style.display = 'none';
}
});

function closeModal3() {
  document.getElementById('modal3').style.display = 'none';
}



window.addEventListener('click', function(event) {
if (event.target == modal3) {
  modal3.style.display = 'none';
}
});