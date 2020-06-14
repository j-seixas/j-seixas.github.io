<template>
    <nav :class="{ 'scrolled': !atTopOfPage }" class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item is-family-code">> cd ~/Seixas</a>

            <a role="button" class="navbar-burger" aria-label="menu" data-target="navMenu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu" id="navMenu">
    
            <div class="navbar-end">
                <a class="navbar-item is-tab is-family-code">
                    Education_
                </a>
                <a class="navbar-item is-tab is-family-code">
                    Skills_
                </a>
                <a class="navbar-item is-tab is-family-code">
                    Projects_
                </a>
                
            </div>

        </div>
        
    </nav>
</template>

<script>
export default {
    name: 'Navbar',

    data() {
        return {
            atTopOfPage: true
        }
    },
    
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(window.querySelectorAll('.navbar-burger'), 0);

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
                });
            }

        });
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll)
    },

    methods: {
        // the function to call when the user scrolls, added as a method
        handleScroll(){
            // when the user scrolls, check the pageYOffset
            if(window.pageYOffset > 0){
                // user is scrolled
                if(this.atTopOfPage) 
                    this.atTopOfPage = false
            } else {
                // user is at top of page
                if(!this.atTopOfPage) 
                    this.atTopOfPage = true
            }
        }
    }
}
</script>

<style lang="scss">
    @import '../styles/global';

    nav.navbar {
        background: $custom-c4;
        box-shadow: 0;
    }

    nav.navbar.scrolled {
        box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02);
    }
</style>