<script lang="ts">
    export let color: string
</script>

<template>
    <button
        class="button"
        class:button--blue={color === "blue"}
        class:button--red={color === "red"}
        class:button--white={color === "white"}
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
        width: 100%;
        height: 4.8rem;
        padding-left: 4rem;
        padding-right: 4rem;
        border-radius: 0.6rem;
        transition-property: color, background-color;
        transition-duration: 150ms;
        
        &--blue {
            background-color: variables.$color-soft-blue;
            color: variables.$color-white;
        }

        &--red {
            background-color: variables.$color-soft-red;
            color: variables.$color-white;

            &:hover {
                background-color: transparent;
                outline: 0.2rem solid variables.$color-soft-red;
                color: variables.$color-soft-red;
            }
        }

        &--white {
            background-color: variables.$color-white;
            color: variables.$color-very-dark-blue;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }

        &__label {
            display: block;
            margin: auto;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.2rem;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
        }
    }
</style>