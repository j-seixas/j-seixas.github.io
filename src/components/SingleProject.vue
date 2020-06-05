<template>
    <div class="column is-one-third-widescreen is-half-desktop is-half-tablet is-full-mobile">
        <div class="box proj">
            <p class="title">{{title}}</p>
            <p>{{description}}</p>
            <br>
            <b-taglist>
                <b-tag rounded v-for="item in tags" :key="item">{{item}}</b-tag>
            </b-taglist>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleProject',
    props: ['title', 'description', 'tags']
}
</script>

<style lang="scss">
    @import '../styles/global';
    .proj {

    }


</style>