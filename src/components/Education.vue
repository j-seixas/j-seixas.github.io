<template>
    <section id="education" class="section">
        <div class="container container-header">
            <h1 class="title is-2 section-naming is-family-code">
                > cd education</h1>
        </div>
        <div class="container">
            <div class="edu-entry">
                <p class="title is-4"><span class="is-family-code">-> </span>BSc + MSc in Informatics and Computer Engineering in Porto, Portugal</p>
                <p class="subtitle is-6 date is-family-code tag is-custom-y1 is-light">Sep 2015 ~ Present</p>
                <p class="subtitle is-6 place">
                    <span class="icon is-small">
                        <i class="fas fa-map-marker-alt"></i>
                    </span> Faculty of Engineering at University of Porto</p>

            </div>

            <div class="edu-entry">
                <p class="title is-4"><span class="is-family-code">-> </span>Erasmus+ Exchange Program in Kraków, Poland</p>
                <p class="subtitle is-6 date is-family-code tag is-custom-y1 is-light">Sep 2019 ~ Feb 2020</p>
                <p class="subtitle is-6 place">
                    <span class="icon is-small">
                        <i class="fas fa-map-marker-alt"></i>
                    </span> Faculty of Computer Science and Telecommunications at Cracow University of Technology</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Education',
}
</script>

<style lang="scss">
    @import '../styles/global';

    div.container.container-header {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    div.edu-entry {
        margin-bottom: 1rem;
        border-left: 0.2rem solid $custom-y1-dark;
        padding-bottom: 1.25rem;
        padding-top: 1.25rem;
        padding-left: 1.25rem;

        p.title.is-4 {
            margin-bottom: 0.25rem;
        }

        p.subtitle.is-6.date.tag {
            font-size: 0.9rem;
            margin-top: -1.25rem;
        }
    }

    p.place {
        margin-top: -0.5rem;
        
    }
</style>