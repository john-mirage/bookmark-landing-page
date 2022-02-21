<script lang="ts">

</script>

<template>
    <button class="icon-button">
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

        &__icon {
            display: block;
            margin: auto;
        }
    }
</style>