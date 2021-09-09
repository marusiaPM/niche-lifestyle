function scrollDown() {
   let pageHeight = window.innerHeight;
   let scroll = pageHeight - 100;

   window.scrollTo({
      top: scroll, 
      left: 0, 
      behavior: 'smooth'
   });
}

function scrollToSection(anchorID) {
   // // get the anchor 
   const anchor = document.getElementById(anchorID);

   //get coordinates
   let c1 = anchor.getBoundingClientRect().top;
   let c2 = window.pageYOffset;

   let scroll = c1 + c2 - 100;

   console.log (c2);
   console.log (c1);

   window.scrollTo({
      top: scroll, 
      left: 0,  
      behavior: 'smooth'
   });
}