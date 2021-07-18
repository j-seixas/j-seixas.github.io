<template>
    <section id="experience" class="section">
        <div class="container container-header">
            <h1 class="title is-2 section-naming is-family-code">
                > work experience</h1>
        </div>
        <div class="container">
            <div class="exp-entry">
                <p class="title is-4"><span class="is-family-code">-> </span>Software Engineer @ <a href="https://jumpseller.com" class="icon-link">Jumpseller</a></p>
                <p class="subtitle is-6 date is-family-code tag is-custom-y1 is-light">Sep 2020 ~ Present</p>
                <div class="content">
                    <ul>
                        <li> Develop new and maintain core functionality in Ruby, Ruby on Rails, MySQL and React.</li>
                        <li> Designed and developed ElasticSearch abstraction in Ruby and Python.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Experience',
}
</script>

<style lang="scss">
    @import '../styles/global';

    div.container.container-header {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    div.exp-entry {
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
            margin-bottom: 0.5rem;
        }
    }

    p.place {
        margin-top: -0.5rem;
        
    }

</style>