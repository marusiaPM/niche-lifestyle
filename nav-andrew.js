const nav = () => {
        const burger = document.querySelector('.topNavBurger ');
        const sideNav = document.querySelector('.sideNavWrap');
        const links = document.querySelectorAll('.sideNavLink');

        const menuInTransitionAnimationTime = 2000;
        let menuInTransition = false;

        const navTransitionTime = 0.5; //seconds
        const linkAnimationTimeout = 150; //milliseconds,half of the desired time

        window.addEventListener('load', (event) => {
            // add transition property to the side nav - add here so all timings can be editted from this file
            sideNav.style.transitionDuration = navTransitionTime+"s";
            sideNav.style.transitionProperty = "all";
            sideNav.style.transitionTimingFunction = "ease";
        });


        burger.addEventListener('click',() => {
           // CLOSE NAV

            if (menuInTransition) {

            } 
            
            else 
            {

                if (burger.classList.contains("topNavBurger--close")) {

                    menuInTransition = true;

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

                    menuInTransition = true;

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

                }

                setTimeout(function () {
                    menuInTransition = false;
                }, menuInTransitionAnimationTime)

            }

        });

    
}

nav();
