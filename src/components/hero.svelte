<script lang="ts">
    import CallToAction from '@components/call-to-action.svelte'
    import heroIllustration from '@assets/images/illustration-hero.svg';
</script>

<template>
    <article class="hero">
        <CallToAction rowReversed rightShape>
            <svelte:fragment slot="left">
                <img
                    class="hero__illustration"
                    src={heroIllustration}
                    alt="Tablet illustration"
                >
            </svelte:fragment>

            <svelte:fragment slot="right">
                <div class="hero__content">
                    <h1 class="hero__title">A simple Bookmark Manager</h1>
                    <p class="hero__subtitle">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div class="hero__button-group">
                        <button class="hero__button hero__button--primary">Get it on Chrome</button>
                        <button class="hero__button hero__button--secondary">Get it on Firefox</button>
                    </div>
                </div>
            </svelte:fragment>
        </CallToAction>
    </article>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .hero {
        width: 100%;
        height: auto;
        padding-top: 10rem;
        padding-bottom: 10rem;

        @media screen and (min-width: variables.$screen-lg) {
            padding-top: 16rem;
        }

        &__illustration {
            position: relative;
            z-index: 20;
            width: 100%;
            height: auto;

            @media screen and (min-width: variables.$screen-lg) {
                transform: scale(1.2);
                padding-bottom: 6rem;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: auto;
            text-align: center;

            @media screen and (min-width: variables.$screen-lg) {
                align-items: flex-start;
                text-align: start;
                padding-right: 6rem;
            }
        }
        
        &__title {
            max-width: variables.$container-sm;
            font-size: 3.6rem;
            font-weight: 500;
            color: variables.$color-very-dark-blue;
            line-height: 4.4rem;
            margin-bottom: 2rem;
            margin-top: 6rem;

            @media screen and (min-width: variables.$screen-lg) {
                margin-top: 0;
            }

            @media screen and (min-width: variables.$screen-xl) {
                font-size: 5rem;
                line-height: 6rem;
            }
        }

        &__subtitle {
            max-width: variables.$container-sm;
            @include mixins.text-body;
            margin-bottom: 3rem;
        }

        &__button-group {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 2rem;
            width: 100%;
            height: auto;

            @media screen and (min-width: variables.$screen-sm) {
                flex-direction: row;
                justify-content: center;
            }

            @media screen and (min-width: variables.$screen-lg) {
                justify-content: flex-start;
            }
        }

        &__button {
            display: block;
            width: 100%;
            padding: 2rem 2.4rem;
            border-radius: 0.6rem;
            background-color: variables.$color-soft-red;
            color: variables.$color-white;
            font-size: 1.6rem;
            font-weight: 500;
            transition-property: color, background-color;
            transition-duration: 150ms;

            @media screen and (min-width: variables.$screen-sm) {
                width: auto;
            }

            &--primary {
                background-color: variables.$color-soft-blue;
                color: variables.$color-white;

                &:hover {
                    background-color: transparent;
                    outline: 0.2rem solid variables.$color-soft-blue;
                    color: variables.$color-soft-blue;
                }
            }

            &--secondary {
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
        }
    }
</style>