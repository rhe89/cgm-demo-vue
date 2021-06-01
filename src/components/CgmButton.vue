<template>
    <button id="myButton" @click="buttonClicked">
        {{title}}
    </button>
</template>


<script>
export default {
    props: {
        title: String
    },
    methods: {
        buttonClicked() {
            this.$emit("buttonClicked")
        }
    }
}
</script>

<style>


</style>