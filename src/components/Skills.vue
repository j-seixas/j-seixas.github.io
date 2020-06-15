<template>
    <section id="skills" class="section">
        <section class="section">
            <div class="container">
                <h1 class="title is-2 section-naming is-family-code">
                    > ls skills</h1>
            </div>
        </section>
        <div class="container">
            <div class="skill">
                <p class="title is-4 skill-p"><span class="is-family-code">-> </span>Languages</p>
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
                <p class="title is-4 skill-p"><span class="is-family-code">-> </span>Technologies</p>
                <div class="tech-list">
                    <p class="title is-5 is-family-code">./Programming</p>
                    <div class="tags are-medium">
                        <span class="tag is-family-code is-custom-y1 is-light">C</span>
                        <span class="tag is-family-code is-custom-y1 is-light">C++</span>
                        <span class="tag is-family-code is-custom-y1 is-light">C#</span>
                        <span class="tag is-family-code is-custom-y1 is-light">Java</span>
                        <span class="tag is-family-code is-custom-y1 is-light">Javascript</span>
                        <span class="tag is-family-code is-custom-y1 is-light">Python</span>
                    </div>
                </div>
            </div>

            <div class="tech-list">
               <p class="title is-5 is-family-code">./Web</p>
                <div class="tags are-medium">
                    <span class="tag is-family-code is-custom-y1 is-light">HTML</span>
                    <span class="tag is-family-code is-custom-y1 is-light">CSS/SCSS</span>
                    <span class="tag is-family-code is-custom-y1 is-light">PHP</span>
                    <span class="tag is-family-code is-custom-y1 is-light">Laravel</span>
                    <span class="tag is-family-code is-custom-y1 is-light">React</span>
                    <span class="tag is-family-code is-custom-y1 is-light">Vue</span>
                </div>
            </div>

            <div class="tech-list">
                <p class="title is-5 is-family-code">./Database</p>
                <div class="tags are-medium">
                    <span class="tag is-family-code is-custom-y1 is-light">SQLite</span>
                    <span class="tag is-family-code is-custom-y1 is-light">PostgreSQL</span>
                </div>
            </div>
            <div class="tech-list">
                <p class="title is-5 is-family-code">./GameDev</p>
                <div class="tags are-medium">
                    <span class="tag is-family-code is-custom-y1 is-light">Unity</span>
                    <span class="tag is-family-code is-custom-y1 is-light">LibGDX</span>
                </div>
            </div>
            <div class="tech-list">
                <p class="title is-5 is-family-code">./Other</p>
                <div class="tags are-medium">
                    <span class="tag is-family-code is-custom-y1 is-light">React Native</span>
                    <span class="tag is-family-code is-custom-y1 is-light">Android Native</span>
                    <span class="tag is-family-code is-custom-y1 is-light">Java Swing</span>
                    <span class="tag is-family-code is-custom-y1 is-light">Git</span>
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

<style lang="scss">
    @import '../styles/global';

    h1.section-naming {
        padding-left: 1.25rem;
    }

    p.title.is-4.skill-p {
        margin-left: 2.5rem;
    }

    div.lang-list {
        margin-left: 2.5rem;
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
        margin-left: 2.5rem;
        margin-bottom: 1rem;
        border-left: 0.2rem solid $custom-y1-dark;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
        padding-left: 1.25rem;

        div.tags.are-medium {
            margin-top: -1.15rem
        }
    }

    span.tag.back {
        background: $custom-c4;
    }

    span.tag.back.tech {
        font-size: 1.25rem;
    }

</style>