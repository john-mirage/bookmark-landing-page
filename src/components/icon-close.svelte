<script lang="ts">

</script>

<template>
    <svg class="icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15">
        <path class="icon-close__path" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/>
    </svg>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .icon-close {
        width: 1.6rem;
        height: auto;

        &__path {
            fill: variables.$color-white;
            transition: fill 150ms;

            .icon-button:hover .icon-close & {
                fill: variables.$color-soft-red;
            }
        }
    }
</style>