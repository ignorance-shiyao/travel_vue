<template>
  <detail-banner></detail-banner>
</template>

<script>
    import DetailBanner from './components/Banner'

    export default {
        name: "Detail",
        components: {DetailBanner},
        comments: {
            DetailBanner
        }
    }
</script>

<style lang='stylus' scoped>
  @import "~styles/varibles.styl"
</style>
