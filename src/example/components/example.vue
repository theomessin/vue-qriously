<template>
    <div class="example">
        <qriously :value="payload" :size="250" />
        <input type="text" v-model="payload">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                payload: "You shall not SCAN!!!",
            };
        }
    }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
    input
        clear: both
        transition: all 0.250s linear
        border: 1px solid #D3DCE7
        color: #5A6A75
        box-sizing: border-box
        padding: 7px
        width: 100%
</style>