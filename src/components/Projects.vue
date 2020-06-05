<template>
    <section class="section">
        <div class="container">
            <div class="columns is-multiline is-custom1">
                <single-project 
                    v-for='proj in projects' 
                    :title='proj.title' 
                    :description='proj.description' 
                    :tags='proj.tags' 
                    :key='proj.id'></single-project>
            </div>
        </div>
    </section>
</template>

<script>
import SingleProject from './SingleProject.vue';

export default {
    name: 'Projects',
    components: {
        'single-project': SingleProject
    },
    data: () => ({
        projects: [
            {
                id: 0,
                title: 'Test projects',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta elit in lobortis feugiat. Aenean id augue aliquam, finibus velit non, lacinia tortor. Mauris tristique varius quam, in sagittis tortor dignissim vitae. In lobortis, felis ac condimentum pharetra, ex metus molestie tortor, vel mollis neque tortor ut sem. Duis sodales ex nec tincidunt feugiat.',
                tags: ['one', 'two', 'three']
            },
            {
                id: 1,
                title: 'Test projects',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta elit in lobortis feugiat. Aenean id augue aliquam, finibus velit non, lacinia tortor. Mauris tristique varius quam, in sagittis tortor dignissim vitae. In lobortis, felis ac condimentum pharetra, ex metus molestie tortor, vel mollis neque tortor ut sem. Duis sodales ex nec tincidunt feugiat.',
                tags: ['one', 'two', 'three']
            },
            {
                id: 2,
                title: 'Test projects',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta elit in lobortis feugiat. Aenean id augue aliquam, finibus velit non, lacinia tortor. Mauris tristique varius quam, in sagittis tortor dignissim vitae. In lobortis, felis ac condimentum pharetra, ex metus molestie tortor, vel mollis neque tortor ut sem. Duis sodales ex nec tincidunt feugiat.',
                tags: ['one', 'two', 'three']
            },
            {
                id: 3,
                title: 'Test projects',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta elit in lobortis feugiat. Aenean id augue aliquam, finibus velit non, lacinia tortor. Mauris tristique varius quam, in sagittis tortor dignissim vitae. In lobortis, felis ac condimentum pharetra, ex metus molestie tortor, vel mollis neque tortor ut sem. Duis sodales ex nec tincidunt feugiat.',
                tags: ['one', 'two', 'three']
            }
        ]
    })
}
</script>

<style>

</style>