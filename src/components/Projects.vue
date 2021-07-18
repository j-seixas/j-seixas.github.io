<template>
    <section id="project" class="section">
        <div class="container container-header">
            <h1 class="title is-2 section-naming is-family-code">
                > projects</h1>
        </div>
        <div class="container">
            <div class="columns is-multiline">
                <single-project 
                    v-for='proj in projects' 
                    :title='proj.title' 
                    :link='proj.link'
                    :description='proj.description' 
                    :tags='proj.tags' 
                    :key='proj.id'></single-project>
            </div>
        </div>
    </section>
</template>

<script>
import SingleProject from './SingleProject.vue';
import json_proj from '../assets/projects.json';

export default {
    name: 'Projects',
    components: {
        'single-project': SingleProject
    },
    data: () => ({
        projects: json_proj,
    })
}
</script>

<style lang="scss" scoped>

</style>