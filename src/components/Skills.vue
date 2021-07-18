<template>
    <section id="skills" class="section">

        <div class="container container-header">
            <h1 class="title is-2 section-naming is-family-code">
                > skills</h1>
        </div>

        <div class="container">
            <div class="skill">
                <p class="title is-4 skill-p"><span class="is-family-code skill-arrow">-> </span>Languages</p>
                <div class="lang-list">

                        <div class="tags are-large has-addons lang">
                            <span class="tag back">Portuguese</span>
                            <span class="tag is-medium is-custom-y1 is-light is-family-code">Native</span>
                        </div>
                   
                        <div class="tags are-large has-addons lang">
                            <span class="tag back">English</span>
                            <span class="tag is-medium is-custom-y1 is-light is-family-code">Fluent</span>
                        </div>
                </div>
            </div>
            <div class="skill">
                <p class="title is-4"><span class="is-family-code skill-arrow">-> </span>Technologies</p>
                <div class="tech-list first">
                    <p class="title is-5 is-family-code">_programming</p>
                    <div class="tags are-medium">
                        <span class="tag is-family-code is-custom-y1 is-light">Ruby</span>
                        <span class="tag is-family-code is-custom-y1 is-light">Ruby on Rails</span>
                        <span class="tag is-family-code is-custom-y1 is-light">Javascript</span>
                        <span class="tag is-family-code is-custom-y1 is-light">Python</span>
                        <span class="tag is-family-code is-custom-y1 is-light">C</span>
                    </div>
                </div>

                <div class="tech-list">
                <p class="title is-5 is-family-code">_web</p>
                    <div class="tags are-medium">
                        <span class="tag is-family-code is-custom-y1 is-light">HTML</span>
                        <span class="tag is-family-code is-custom-y1 is-light">CSS/SCSS</span>
                        <span class="tag is-family-code is-custom-y1 is-light">React</span>
                        <span class="tag is-family-code is-custom-y1 is-light">Vue</span>
                    </div>
                </div>

                <div class="tech-list">
                    <p class="title is-5 is-family-code">_db</p>
                    <div class="tags are-medium">
                        <span class="tag is-family-code is-custom-y1 is-light">MySQL</span>
                        <span class="tag is-family-code is-custom-y1 is-light">SQLite</span>
                        <span class="tag is-family-code is-custom-y1 is-light">PostgreSQL</span>
                    </div>
                </div>
                <div class="tech-list">
                    <p class="title is-5 is-family-code">_other</p>
                    <div class="tags are-medium">
                        <span class="tag is-family-code is-custom-y1 is-light">ElasticSearch</span>
                        <span class="tag is-family-code is-custom-y1 is-light">WhatsApp Business API</span>
                        <span class="tag is-family-code is-custom-y1 is-light">Git</span>
                        <span class="tag is-family-code is-custom-y1 is-light">Docker</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Skills',
}
</script>

<style lang="scss" scoped>
    @import '../styles/global';

    span.skill-arrow {
        margin-left: -0.5rem;
    }

    div.skill {
        margin-bottom: 2rem; 
    }

    div.lang-list {
        margin-bottom: 1rem;
        margin-top: -1.25rem;
        border-left: 0.2rem solid $custom-y1-dark;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
        padding-left: 1.25rem;

        div.tags.are-large.has-addons.lang {
            margin-bottom: 0;
        }
    }

    div.tech-list {
        margin-bottom: 1rem;
        border-left: 0.2rem solid $custom-y1-dark;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
        padding-left: 1.25rem;

        div.tags.are-medium {
            margin-top: -1.15rem
        }
    }

    div.tech-list.first {
        margin-top: -1.25rem;
    }

    span.tag.back {
        background: $custom-c4;
    }

</style>