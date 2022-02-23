<script lang="ts">
    export let color: string = "none"
    export let isUppercase: boolean = false
    export let onDark: boolean = false
    export let isOutlined: boolean = false
</script>

<template>
    <button
        class="button"
        class:button--blue={color === "blue"}
        class:button--red={color === "red"}
        class:button--white={color === "white"}
        class:button--on-dark={onDark}
        class:button--outlined={isOutlined}
        on:click|preventDefault
    >
        <span class="button__label" class:button__label--uppercase={isUppercase}>
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
        padding-left: 3rem;
        padding-right: 3rem;
        border-radius: 0.6rem;
        transition-property: color, background-color;
        transition-duration: 150ms;
        
        &--blue {
            background-color: variables.$color-soft-blue;
            color: variables.$color-white;

            &:hover {
                background-color: transparent;
                outline: 0.2rem solid variables.$color-soft-blue;
                color: variables.$color-soft-blue;
            }
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

            &:hover {
                background-color: transparent;
                outline: 0.2rem solid variables.$color-very-dark-blue;
                color: variables.$color-very-dark-blue;
                box-shadow: none;
            }
        }

        &--outlined {
            outline: 0.2rem solid variables.$color-white;
            color: variables.$color-white;
        }

        &--on-dark {
            &:hover {
                background-color: variables.$color-white;
            }
        }

        &__label {
            display: block;
            margin: auto;
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 2rem;

            &--uppercase {
                font-size: 1.4rem;
                text-transform: uppercase;
                letter-spacing: 0.2rem;
            }
        }
    }
</style>