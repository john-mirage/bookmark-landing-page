<script lang="ts">
    export let type: string
    export let hero: boolean = false
    export let browser: boolean = false
</script>

<template>
    <button
        class="button"
        class:button--primary={type === "primary"}
        class:button--secondary={type === "secondary"}
        class:button--hero={hero}
        class:button--browser={browser}
    >
        <span class="button__label">
            <slot />
        </span>
    </button>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .button {
        display: flex;
        border-radius: 0.6rem;
        
        &--primary {
            background-color: variables.$color-soft-blue;
            color: variables.$color-white;
        }

        &--secondary {
            background-color: variables.$color-white;
            color: variables.$color-very-dark-blue;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }

        &--hero {
            width: calc(50% - 1rem);
            height: 6rem;
        }
        
        &--browser {
            width: 100%;
            height: 6rem;
        }

        &__label {
            display: block;
            margin: auto;
            font-size: 1.6rem;
            font-weight: 500;
        }
    }
</style>