const topNav = document.querySelector('.topNavWrap');

function stick() {
   if (window.pageYOffset > 20) {
      topNav.classList.add("topNavWrap--sticky")
   } else {
      topNav.classList.remove("topNavWrap--sticky");
   }
}

window.onscroll = function() {stick()};