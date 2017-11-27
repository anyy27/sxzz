<template>
    <div class="demo-li">
        <li>
            <div>334455</div>
            <span></span>
        </li>
    </div>
</template>

<script>
    export default {
        functional: true,
        render(h, ctx) {
            return h('li', ctx.data, [
                h('div', {attrs: {class: 'name'}}, "kkdkdkd"),
                h('span', {attrs: {class: 'addr'}}, "ldldldl")
            ]);
        },
        props: {
            item: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {};
        },
        computed: {},
        components: {},
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {}
    };
</script>

<style scoped lang="scss">

</style>
