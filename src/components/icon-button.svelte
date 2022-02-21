<script lang="ts">
    export let right: boolean = false
</script>

<template>
    <button class="icon-button" class:icon-button--right={right}>
        <span class="icon-button__icon">
            <slot />
        </span>
    </button>
</template>

<style lang="scss">
    .icon-button {
        display: flex;
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 9999px;

        &--right {
            margin-right: -1.2rem;
        }

        &__icon {
            display: block;
            margin: auto;
        }
    }
</style>