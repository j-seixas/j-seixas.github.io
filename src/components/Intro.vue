<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h1 class="title name">
                    João Seixas
                </h1>
                <h2 class="subtitle is-4">
                    <p>Student in Faculty of Engineering, University of Porto in Portugal.</p>
                    <p>Taking BSc (3 years) + MSc (2 years) in Informatics and Computer Engineering (currently on the 5th and last year).</p>
                </h2>
                <section>
                    <a v-bind:href='pdfLink' download class="button is-custom-y1">CV</a>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Intro',
    data () {
        return {
            pdfLink: require('../assets/CV.pdf')
        }     
    }
}
    
</script>

<style lang="scss" scoped>
    @import '../styles/global';

    h1.name {
        font-size: 4rem;
    }
    
</style>