<script lang="ts">
    export let type: string
    export let buttonWidth: string = "100%"
    export let centered: boolean = false
</script>

<template>
    <button
        class="button"
        class:button--primary={type === "primary"}
        class:button--secondary={type === "secondary"}
        class:button--contact={type === "contact"}
        class:button--outlined={type === "outlined"}
        class:button--centered={centered}
        style:width={buttonWidth}
    >
        <span class="button__label" class:button__label--uppercase={type === "outlined"}>
            <slot />
        </span>
    </button>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .button {
        display: flex;
        height: 6rem;
        padding-left: 2rem;
        padding-right: 2rem;
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

        &--contact {
            background-color: variables.$color-soft-red;
            color: variables.$color-white;
        }

        &--outlined {
            border: 0.2rem solid variables.$color-white;
            color: variables.$color-white;
        }

        &--centered {
            margin-left: auto;
            margin-right: auto;
        }

        &__label {
            display: block;
            margin: auto;
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 2.2rem;

            &--uppercase {
                font-size: 2rem;
                font-weight: 400;
                letter-spacing: 0.2rem;
                text-transform: uppercase;
            }
        }
    }
</style>