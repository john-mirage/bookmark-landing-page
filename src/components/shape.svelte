<script lang="ts">
    export let right: boolean = false
    export let left: boolean = false
</script>

<template>
    <div
        class="shape"
        class:shape--right={right}
        class:shape--left={left}
    ></div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .shape {
        position: absolute;
        z-index: 10;
        bottom: 0;
        width: 80%;
        height: 80%;
        background-color: variables.$color-soft-blue;

        &--right {
            right: 0;
            border-top-left-radius: 9999px;
            border-bottom-left-radius: 9999px;
        }

        &--left {
            left: 0;
            border-top-right-radius: 9999px;
            border-bottom-right-radius: 9999px;
        }
    }
</style>