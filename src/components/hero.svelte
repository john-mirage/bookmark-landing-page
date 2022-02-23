<script lang="ts">
    import Button from '@components/button.svelte'
</script>

<template>
    <article class="hero">
        <header class="hero__header">
            <div class="hero__container hero__container--right">
                <img
                    class="hero__illustration"
                    src="src/assets/images/illustration-hero.svg"
                    alt="Tablet illustration"
                >
            </div>
            <div class="hero__shape"></div>
        </header>
        
        <div class="hero__body">
            <div class="hero__container hero__container--left">
                <h1 class="hero__title">A simple Bookmark Manager</h1>
                <p class="hero__subtitle">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div class="hero__actions">
                    <div class="hero__button">
                        <Button color="blue">Get it on Chrome</Button>
                    </div>
                    <div class="hero__button">
                        <Button color="white">Get it on Firefox</Button>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .hero {
        position: relative;
        width: 100%;
        height: auto;
        padding-top: 10rem;
        padding-bottom: 10rem;

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
            margin-bottom: 10rem;

            @media screen and (min-width: variables.$screen-lg) {
                width: 50%;
                order: 2;
                margin-bottom: 0;
            }
        }

        &__illustration {
            position: relative;
            z-index: 20;
            width: 100%;
            height: auto;

            @media screen and (min-width: variables.$screen-lg) {
                transform: translateX(6%);
            }
        }

        &__shape {
            position: absolute;
            z-index: 10;
            bottom: 0;
            right: 0;
            width: 80%;
            height: 81%;
            background-color: variables.$color-soft-blue;
            border-top-left-radius: 9999px;
            border-bottom-left-radius: 9999px;

            @media screen and (min-width: variables.$screen-lg) {
                width: calc(100% - 16rem);
            }
        }

        &__body {
            width: 100%;
            height: auto;

            @media screen and (min-width: variables.$screen-lg) {
                width: 50%;
                order: 1;
            }
        }
        
        &__title {
            font-size: 3.6rem;
            font-weight: 500;
            color: variables.$color-very-dark-blue;
            line-height: 4.4rem;
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

        &__actions {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;

            @media screen and (min-width: variables.$screen-lg) {
                justify-content: flex-start;
            }
        }
        

        &__button {
            width: calc(50% - 1rem);
            height: auto;

            @media screen and (min-width: variables.$screen-lg) {
                width: auto;
                margin-right: 2rem;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>