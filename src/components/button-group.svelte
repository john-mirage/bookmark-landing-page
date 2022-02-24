<script lang="ts">

</script>

<template>
    <div class="button-group">
        <slot />
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .button-group {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        height: auto;

        @media screen and (min-width: variables.$screen-sm) {
            flex-direction: row;
        }
    }
</style>