<template>
    <section id="home" class="hero is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container">
                <h1 class="title name is-spaced">
                    <span class="first-name">João </span>
                    <span class="last-name"> Seixas</span>
                </h1>
                <h2 class="subtitle">
                    <p><a href="https://sigarra.up.pt/feup/en/CUR_GERAL.CUR_VIEW?pv_curso_id=742"> BSc + MSc Informatics and Computer Engineering</a> Student <a href="https://sigarra.up.pt/feup/pt/web_page.inicial">@FEUP</a></p>
                </h2>
                <div class="container social">
                    <span class="icon is-medium">
                        <a href="mailto:jnuno1997@gmail.com" class="icon-link">
                            <i class="fas fa-2x fa-envelope"></i>
                        </a>
                    </span>
                    <span class="icon is-medium">
                        <a href="https://github.com/j-seixas" class="icon-link">
                            <i class="fab fa-2x fa-github"></i>
                        </a>
                    </span>
                    <span class="icon is-medium">
                        <a href="https://linkedin.com/in/joao-seixas/" class="icon-link">
                            <i class="fab fa-2x fa-linkedin"></i>
                        </a>
                    </span>
                    <span class="icon is-medium resume">
                        <a v-bind:href='pdfLink' download class="icon-link">
                            <i class="fas fa-2x fa-file-download"></i>
                            
                        </a>
                    </span>
                    <span class="cv">
                        <b> Curriculum </b>
                    </span>
                </div>
            </div>
        </div>
        <div class="hero-foot has-text-centered">
            <div class="container">
                <span class="icon is-large">
                    <a :class="{ 'dont-show': !showArrow }" class="icon-link" href="#" v-scroll-to="'#education'">
                        <i class="fas fa-2x fa-chevron-down"></i>
                    </a>
                </span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Intro',
    data () {
        return {
            showArrow: true,
            pdfLink: require('../assets/CV.pdf')
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
            if(window.pageYOffset > 100){
                // user is scrolled
                if(this.showArrow) 
                    this.showArrow = false
            } else {
                // user is at top of page
                if(!this.showArrow) 
                    this.showArrow = true
            }
        }
    }
}
    
</script>

<style lang="scss" scoped>
    @import '../styles/global';

    h1.title.name {
        font-size: 4rem;

    }

    span.first-name {
        font-weight: 500;
    }
    span.last-name {
        font-weight: 800;
    }
    
    h2.subtitle {
        a {
            color: $text;
            &:hover {
                color: $custom-y1-dark
            }
        }
    }

    div.container.social {
        display: inline-flex;

        span.icon.is-medium {
            margin-right: 1em;

            a:hover {
                color: $custom-y1-dark
            }
        }
        
        span.icon.is-medium.resume {
            margin-right: 0;
        }

        span.resume:hover + span.cv{
            visibility: visible;
        }

        span.cv {
            visibility: hidden;
        }
    }

    a.is-custom-y1.is-light {
        box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1), 0 0px 0 1px rgba($scheme-invert, 0.02);
    }

    a.icon-link.dont-show {
        visibility: hidden;
    }
</style>