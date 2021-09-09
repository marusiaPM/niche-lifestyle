const slider = () => {
   const sliderTrack = document.querySelector(".imageSliderTrack");
   const slider = document.querySelector(".imageSliderAllSlides");
   const slides = document.querySelectorAll(".imageSliderSlide");
   const prev = document.querySelector(".imageSliderArrow--prev");
   const next = document.querySelector(".imageSliderArrow--next");
   let transitionTime = 0.4; //seconds

   //clone 1st and last
   slidesLenght = slides.length; //how many slides
   firstSlide = slides[0]; //determine 1st slide
   lastSlide = slides[slidesLenght - 1]; //determine last slide
   cloneFirst = firstSlide.cloneNode(true); // clone the first slide
   cloneLast = lastSlide.cloneNode(true); // clone the last slide
   slider.appendChild(cloneFirst); // add 1st clone to end
   slider.insertBefore(cloneLast, firstSlide); // add last clone to begining 
   cloneFirst.setAttribute("id", "firstClone"); // add id to clone
   cloneLast.setAttribute("id", "lastClone"); // add id to clone
   cloneFirst.setAttribute("class", "imageSliderSlide");// add class to clone
   cloneLast.setAttribute("class", "imageSliderSlide");// add class to clone

   //new slides
   const newSlides = document.querySelectorAll(".imageSliderSlide");

   //auto ,set to true to rotate
   const auto = false;
   let slideInterval;
   const intervalTime = 10000;

   //counter
   let counter = 1;

   // get width of slide
   let size = sliderTrack.clientWidth;

   //show first slide and not the last slide clone
   slider.style.transform = "translateX(" + -size * counter + "px)";

   // next slide function
   function nextSlide() {
      if (counter >= newSlides.length - 1) return;

      slider.style.transitionDuration = transitionTime+"s";
      slider.style.transitionProperty = "all";
      slider.style.transitionTimingFunction = "linear";
   
      counter++;
      slider.style.transform = "translateX(" + -size * counter + "px)";
   
      if (auto) {
         clearInterval(slideInterval);
         slideInterval = setInterval(nextSlide, intervalTime);
      }
   }

   // prev slide function
   function prevSlide() {
      if (counter <= 0) return;
      
      slider.style.transitionDuration = transitionTime+"s";
      slider.style.transitionProperty = "all";
      slider.style.transitionTimingFunction = "linear";

      counter--;
      slider.style.transform = "translateX(" + -size * counter + "px)";
   
      if (auto) {
         clearInterval(slideInterval);
         slideInterval = setInterval(nextSlide, intervalTime);
      }
   }

   //next btn on click
   next.addEventListener("click", (e) => {
      nextSlide();
   });
   
   //prev btn on click
   prev.addEventListener("click", (e) => {
      prevSlide();
   });

   // on window resize - change size and reposition slide
   window.onresize = function(){
      size = slides[0].clientWidth;
      slider.style.transition = 'none';
      slider.style.transform = 'translatex(' + (-size * counter) + 'px)';
   }
   
   //make it infinite
   slider.addEventListener("transitionend", () => {
      if (newSlides[counter].id === "lastClone") {
         slider.style.transition = "none";
         counter = newSlides.length - 2;
         slider.style.transform = "translateX(" + -size * counter + "px)";
      }
   
      if (newSlides[counter].id === "firstClone") {
         slider.style.transition = "none";
         counter = newSlides.length - counter;
         slider.style.transform = "translateX(" + -size * counter + "px)";
      }
   });
   
   // auto rotate
   window.onload=function(){
      setTimeout(loadNextSlideAfterTime, 15000)
   };
   
   function loadNextSlideAfterTime() {
         next.click();
   }
   
   
};

slider();
