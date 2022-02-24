<script lang="ts">
    export let rowReversed: boolean = false
    export let leftShape: boolean = false
    export let rightShape: boolean = false
</script>

<template>
    <article class="cta">
        <div
            class="cta__section"
            class:cta__section--left={!rowReversed}
            class:cta__section--right={rowReversed}
        >
            <div class="cta__half-container">
                <slot name="left" />
            </div>
            {#if leftShape && !rowReversed}
                <div class="cta__shape cta__shape--left"></div>
            {:else if rightShape && rowReversed}
                <div class="cta__shape cta__shape--right"></div>
            {/if}
        </div>

        <div
            class="cta__section"
            class:cta__section--right={!rowReversed}
            class:cta__section--left={rowReversed}
        >
            <div class="cta__half-container">
                <slot name="right" />
            </div>
            {#if rightShape && !rowReversed}
                <div class="cta__shape cta__shape--right"></div>
            {:else if leftShape && rowReversed}
                <div class="cta__shape cta__shape--left"></div>
            {/if}
        </div>
    </article>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .cta {
        width: 100%;
        height: auto;

        @media screen and (min-width: variables.$screen-lg) {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        &__section {
            position: relative;
            width: 100%;
            height: auto;

            @media screen and (min-width: variables.$screen-lg) {
                display: flex;
                flex-direction: row;
            }

            &--left {
                @media screen and (min-width: variables.$screen-lg) {
                    justify-content: flex-end;
                    width: 50%;
                    order: 1;
                } 
            }

            &--right {
                @media screen and (min-width: variables.$screen-lg) {
                    justify-content: flex-start;
                    width: 50%;
                    order: 2;
                } 
            }
        }

        &__half-container {
            @include mixins.container-md;

            @media screen and (min-width: variables.$screen-lg) {
                width: calc(variables.$container-lg / 2);
                margin-left: 0;
                margin-right: 0;
            }

            @media screen and (min-width: variables.$screen-xl) {
                width: calc(variables.$container-xl / 2);
            }

            @media screen and (min-width: variables.$screen-2xl) {
                width: calc(variables.$container-2xl / 2);
            }
        }

        &__shape {
            position: absolute;
            z-index: 10;
            bottom: 0;
            width: 80%;
            height: 90%;
            background-color: variables.$color-soft-blue;

            @media screen and (min-width: variables.$screen-lg) {
                width: calc(100% - 10rem);
            }

            &--left {
                left: 0;
                border-top-right-radius: 9999px;
                border-bottom-right-radius: 9999px;
            }

            &--right {
                right: 0;
                border-top-left-radius: 9999px;
                border-bottom-left-radius: 9999px;
            }
        }
    }
</style>