// 'use strict';

// /**
//  * navbar toggle
//  */

// const overlay = document.querySelector("[data-overlay]");
// const navOpenBtn = document.querySelector("[data-nav-open-btn]");
// const navbar = document.querySelector("[data-navbar]");
// const navCloseBtn = document.querySelector("[data-nav-close-btn]");

// const navElemArr = [overlay, navOpenBtn, navCloseBtn];

// for (let i = 0; i < navElemArr.length; i++) {
//   navElemArr[i].addEventListener("click", function () {
//     navbar.classList.toggle("active");
//     overlay.classList.toggle("active");
//   });
// }

// // document.addEventListener('DOMContentLoaded', () => {
// //   const audio = document.getElementById('background-music');
// //   audio.volume = 0.5; 
  
// //   // Set initial volume if needed

// //   setTimeout(() => {
// //     audio.muted = false;
// // }, 1000);
// // });

// // Get references to the audio element and the button
// document.addEventListener('DOMContentLoaded', function() {
//   const audio = document.getElementById('backgroundMusic');
//   const button = document.getElementById('toggleButton');

//   // Start playing the audio automatically
//   audio.play();

//   // Toggle between play and pause when button is clicked
//   button.addEventListener('click', function() {
//       if (audio.paused) {
//           audio.play();
//           button.textContent = 'Pause';
//       } else {
//           audio.pause();
//           button.textContent = 'Play';
//       }
//   });
// });



// /**
//  * add active class on header when scrolled 200px from top
//  */

// const header = document.querySelector("[data-header]");

// window.addEventListener("scroll", function () {
//   window.scrollY >= 200 ? header.classList.add("active")
//     : header.classList.remove("active");
// })


// document.addEventListener("DOMContentLoaded", function () {
//   const filterButtons = document.querySelectorAll(".filter-btn");
//   const productCards = document.querySelectorAll(".product-card");

//   filterButtons.forEach(button => {
//     button.addEventListener("click", () => {
//       const category = button.getAttribute("data-category");

//       filterButtons.forEach(btn => btn.classList.remove("active"));
//       button.classList.add("active");

//       productCards.forEach(card => {
//         if (category === "all" || card.getAttribute("data-category") === category) {
//           card.style.display = "block";
//         } else {
//           card.style.display = "none";
//         }
//       });
//     });
//   });
// });
// $ (function () {
  $ (document).ready (function(){
    $(".big_image").imagezoomsl({
      zoomrange: [3, 3]
    })
  }) 
  //    zoomWidth: 400, 
  //    tint: "#333", 
  //    Xoffset: 15,
  // });
  

//   // const images = [...document.querySelectorAll(".image")];

//   // const popup = document.getElementById(".popup");
//   // const close = document.getElementById(".close-btn");
//   // const name = document.getElementById(".image-name");

//   // const images = [...document.querySelectorAll('.image')];

// // popup

// const popup = document.querySelector('.popup');
// const closeBtn = document.querySelector('.close-btn');
// const imageName = document.querySelector('.image-name');
// const largeImage = document.querySelector('.large-image');
// const imageIndex = document.querySelector('.index');
// const leftArrow = document.querySelector('.left-arrow');
// const rightArrow = document.querySelector('.right-arrow');

// let index = 0; // will track our current image;

// images.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         updateImage(i);
//         popup.classList.toggle('active');
//     })
// })

// const updateImage = (i) => {
//     let path = `img/img${i+1}.png`;
//     largeImage.src = path;
//     imageName.innerHTML = path;
//     imageIndex.innerHTML = `0${i+1}`;
//     index = i;
// }

// closeBtn.addEventListener('click', () => {
//     popup.classList.toggle('active');
// })

// leftArrow.addEventListener('click', () => {
//     if(index > 0){
//         updateImage(index - 1);
//     }
// })

// rightArrow.addEventListener('click', () => {
//     if(index < images.length - 1){
//         updateImage(index + 1);
//     }
// })



function downloadAllImages() {
  // Get all images
  const images = document.querySelectorAll('img');

  // Create a canvas to draw images on and get the data URL
  images.forEach((img, index) => {
      fetch(img.src)
          .then(response => response.blob())
          .then(blob => {
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = img.alt || `image${index + 1}.png`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
          })
          .catch(console.error);
  });
}


const cardImages = document.querySelectorAll(".card-image");
const cardTitles = document.querySelectorAll(".card-title");
const cardDescriptions = document.querySelectorAll(".card-description");
const cardMediaIcons = document.querySelectorAll(".card-mediaIcons a");
const cardImgs = document.querySelectorAll(".card-image img");
const cardTitleSpans = document.querySelectorAll(".card-title span");
const cardDescSpans = document.querySelectorAll(".card-description span");
const mediaIcons = document.querySelectorAll(".card-mediaIcons a i");

const renderCard = () => {
  //Remove the skeleton loading effect
  cardImages.forEach((cardImage) => {
    cardImage.classList.remove("loading");
  });
  cardTitles.forEach((cardTitle) => {
    cardTitle.classList.remove("loading");
  });
  cardDescriptions.forEach((cardDescription) => {
    cardDescription.classList.remove("loading");
  });
  cardMediaIcons.forEach((cardMediaIcon) => {
    cardMediaIcon.classList.remove("loading");
  });

  //Show the hidden html elements
  cardImgs.forEach((cardImg) => {
    cardImg.style.visibility = "visible";
  });
  cardTitleSpans.forEach((cardTitleSpan) => {
    cardTitleSpan.style.visibility = "visible";
  });
  cardDescSpans.forEach((cardDescSpan) => {
    cardDescSpan.style.visibility = "visible";
  });
  mediaIcons.forEach((mediaIcon) => {
    mediaIcon.style.visibility = "visible";
  });
}

//Execute renderCard on setTimeout
setTimeout(() => {
  renderCard();
}, 1000);

//Execute renderCard after the page loaded
//window.addEventListener("load", () => {
  //renderCard();
//});

  