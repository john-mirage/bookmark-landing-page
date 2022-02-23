<script lang="ts">
    import Button from '@components/button.svelte'
    interface Feature {
        name: string;
        tabName: string;
        description: string;
        imageAlt: string;
        imageSrc: string;
    }
    export let feature: Feature
</script>

<template>
    <div class="feature">
        <div class="feature__header">
            <div class="feature__container feature__container--left">
                <img
                    class="feature__illustration"
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                >
            </div>
            <div class="feature__shape"></div>
        </div>
        
        <div class="feature__body">
            <div class="feature__container feature__container--right">
                <h3 class="feature__title">{ feature.name }</h3>
                <p class="feature__subtitle">{ feature.description }</p>
                <div class="feature__button">
                    <Button color="blue">More Info</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .feature {
        width: 100%;
        height: auto;

        @media screen and (min-width: variables.$screen-lg) {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        &__container {
            @include mixins.container-half-lg;

            &--left {
                @media screen and (min-width: variables.$screen-lg) {
                    margin-left: auto;
                    margin-right: 0;
                }
            }

            &--right {
                @media screen and (min-width: variables.$screen-lg) {
                    margin-left: 0;
                    margin-right: 0;
                } 
            }
        }

        &__header {
            position: relative;
            width: 100%;
            height: auto;
            margin-bottom: 5rem;

            @media screen and (min-width: variables.$screen-lg) {
                width: 50%;
                margin-bottom: 0;
            }
        }

        &__illustration {
            position: relative;
            z-index: 20;
            width: 100%;
            height: auto;
        }

        &__shape {
            position: absolute;
            z-index: 10;
            bottom: 0;
            left: 0;
            width: 80%;
            height: 100%;
            background-color: variables.$color-soft-blue;
            border-top-right-radius: 9999px;
            border-bottom-right-radius: 9999px;
            transform: translateY(17%);

            @media screen and (min-width: variables.$screen-lg) {
                width: calc(100% - 16rem);
            }
        }

        &__body {
            width: 100%;
            height: auto;

            @media screen and (min-width: variables.$screen-lg) {
                width: 50%;
            }
        }

        &__title {
            @include mixins.text-display;
            text-align: center;
            margin-bottom: 2rem;

            @media screen and (min-width: variables.$screen-lg) {
                text-align: start;
            }
        }

        &__subtitle {
            @include mixins.text-body;
            text-align: center;
            margin-bottom: 4rem;

            @media screen and (min-width: variables.$screen-lg) {
                text-align: start;
            }
        }

        &__button {
            display: none;

            @media screen and (min-width: variables.$screen-lg) {
                display: block;
                width: 20rem;
            }
        }
    }
</style>