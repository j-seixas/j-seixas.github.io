<template>
    <nav :class="{ 'scrolled': !atTopOfPage }" class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item is-family-code" href="#" v-scroll-to="'#home'">~/Seixas</a>

            <a role="button" class="navbar-burger" aria-label="menu" data-target="navMenu" aria-expanded="false" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu" id="navMenu" :class="{ 'is-active': showNav }">
    
            <div class="navbar-end">
                <a class="navbar-item is-family-code" href="#" v-scroll-to="'#education'">
                    Education_
                </a>
                <a class="navbar-item is-family-code">
                    Skills_
                </a>
                <a class="navbar-item is-family-code" href="#" v-scroll-to="'#project'">
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
            atTopOfPage: true,
            showNav: false
        }
    },
    
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
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

    #navMenu {
        background: $custom-c4;
    }

    a.navbar-item.is-family-code {
        &:hover {
            color: $custom-y1-dark;
        }

        &:focus {
            color: $custom-y1-dark;
        }
    }
</style>