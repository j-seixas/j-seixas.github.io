<template>
    <div class="column is-one-third-widescreen is-half-desktop is-half-tablet is-full-mobile">
        <div class="card proj">
            <div class="card-content">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <p class="title is-4">{{title}}</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <a :href="link" class="icon-link">
                                <span class="icon is-medium">
                                    <i class="fab fa-2x fa-github"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <p>{{description}}</p>
                <br>
                <div class="tags list-of-tags">
                    <span class="tag is-custom-y1 is-light" v-for="item in tags" :key="item">
                        {{item}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleProject',
    props: ['title', 'link', 'description', 'tags']
}
</script>

<style lang="scss">
    @import '../styles/global';
    
    
    .card {
        display: flex;
        flex-direction: column;
        height: 100%
    }

    .card-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    a.icon-link {
        color: $text;

        &:hover {
            color: $custom-y1-dark;
        }
    }

</style>