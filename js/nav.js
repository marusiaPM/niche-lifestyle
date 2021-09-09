const nav = () => {
    const burger = document.querySelector('.topNavBurger ');
    const sideNav = document.querySelector('.sideNavWrap');
    const links = document.querySelectorAll('.sideNavLink');


    const navTransitionTime = 0.5; //seconds - time for the nav to slide in
    const linkAnimationTimeout = 150; //milliseconds,half of the desired time - delay for the nav links to slide in

    window.addEventListener('load', (event) => {
        // add transition property to the side nav - add here so all timings can be editted from this file
        sideNav.style.transitionDuration = navTransitionTime+"s";
        sideNav.style.transitionProperty = "all";
        sideNav.style.transitionTimingFunction = "ease";
    });


    const linksNumber = links.length; // how many links in the nav
    const menuInTransitionAnimationTime = linksNumber * linkAnimationTimeout; //milliseconds - time during which the burger can't be clicked , equals the time all links need to slide in
    let menuInTransition = false; // is the navigation in transition


    burger.addEventListener('click',() => {
        
        // check if burger can be clicked 
        if (menuInTransition == false){

            // CLOSE NAV
            if (burger.classList.contains("topNavBurger--close")) {

                // transform burger
                burger.classList.add('topNavBurger--open');
                burger.classList.remove('topNavBurger--close');

                // hide nav
                sideNav.style.transform = "translateX(100%)";

                // add scroll to the body
                document.body.style.overflowY = "auto";

                //link animation
                links.forEach(link =>
                    link.classList.remove('sideNavLink--show')
                );
            }

            // OPEN NAV
            else {

                //chanege the variable so the burger can not be changed while the links are transitioning
                menuInTransition = true;
                //change burger tyling while transition is going
                burger.style.cursor = "none";

                // transform burger
                burger.classList.remove('topNavBurger--open');
                burger.classList.add('topNavBurger--close');

                // show nav
                sideNav.style.transform = "translateX(0%)";

                // remove scroll from the body, the wait time is needed to avoid page jumping when the scroll bar disappears, timeout time equals the transition time of the navigation
                setTimeout(function () {
                    document.body.style.overflowY = "hidden";
                }, navTransitionTime * 1000);


                //link animation
                links.forEach((link, i) => {
                    setTimeout(() => {
                        link.classList.add('sideNavLink--show');
                    }, i * linkAnimationTimeout + linkAnimationTimeout);
                });

                setTimeout(function () {
                    menuInTransition = false;
                    burger.style.cursor = "pointer";
                }, menuInTransitionAnimationTime)

            }

        }

    });

}

nav();
