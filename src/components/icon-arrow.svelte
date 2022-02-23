<script lang="ts">
    export let active: boolean = false
</script>

<template>
    <svg
        class="icon-arrow"
        class:icon-arrow--active={active}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 12"
    >
        <path
            class="icon-arrow__path"
            class:icon-arrow__path--active={active}
            fill="none"
            stroke-width="3"
            d="M1 1l8 8 8-8"
        />
    </svg>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .icon-arrow {
        width: 2rem;
        height: auto;
        transition: transform 150ms;

        &--active {
            transform: rotate(180deg);
        }

        &__path {
            stroke: variables.$color-soft-blue;
            transition: stroke 150ms;
            
            &--active {
                stroke: variables.$color-soft-red;
            }
        }
    }
</style>