<template>
    <section class="hero is-fullheight is-custom-c1">
        <div class="hero-body">
            <div class="container">
                <h1 class="title"> Work in progress...</h1>
                <br>
                <br>
                <h1 class="title">
                    João Seixas
                </h1>
                <h2 class="subtitle">
                    <p>Student in Faculty of Engineering, University of Porto in Portugal <img src="https://img.icons8.com/offices/30/000000/portugal.png">.</p>
                    <p>Taking BSc (3 years) + MSc (2 years) in Informatics and Computer Engineering (currently on the 5th and last year).</p>
                </h2>
                <section>
                    <a v-bind:href='pdfLink' download>
                        <b-button type="is-custom-c1" size="is-medium" inverted> CV </b-button>
                    </a>
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
    // $font-name: 'Fira Code', monospace;
    // $bg-color: #1a1b1f;
    // $fg-color: #c4a265;
    // $font-color: #efefef;

    // div.hero-body {
    //     font-family: $font-name;
    //     color: $font-color;
    //     background: $bg-color;

    // }

    // h1, h2 {
    //     color: $font-color;
    // }
    
</style>