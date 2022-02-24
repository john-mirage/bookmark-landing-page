<script lang="ts">
    import CallToAction from '@components/call-to-action.svelte'
    import ButtonGroup from '@components/button-group.svelte'
    import Button from '@components/button.svelte'
</script>

<template>
    <article class="hero">
        <CallToAction rowReversed rightShape>
            <svelte:fragment slot="left">
                <img
                    class="hero__illustration"
                    src="src/assets/images/illustration-hero.svg"
                    alt="Tablet illustration"
                >
            </svelte:fragment>

            <svelte:fragment slot="right">
                <h1 class="hero__title">A simple Bookmark Manager</h1>
                <p class="hero__subtitle">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <ButtonGroup>
                    <Button color="blue">Get it on Chrome</Button>
                    <Button color="white">Get it on Firefox</Button>
                </ButtonGroup>
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

        &__illustration {
            position: relative;
            z-index: 20;
            width: 100%;
            height: auto;

            @media screen and (min-width: variables.$screen-lg) {
                transform: scale(1.2);
                padding-bottom: 3rem;
            }
        }
        
        &__title {
            max-width: variables.$container-sm;
            font-size: 3.6rem;
            font-weight: 500;
            color: variables.$color-very-dark-blue;
            line-height: 4.4rem;
            text-align: center;
            margin-bottom: 2rem;
            margin-top: 6rem;

            @media screen and (min-width: variables.$screen-lg) {
                text-align: start;
                margin-top: 0;
            }
        }

        &__subtitle {
            max-width: variables.$container-sm;
            @include mixins.text-body;
            text-align: center;
            margin-bottom: 4rem;

            @media screen and (min-width: variables.$screen-lg) {
                text-align: start;
            }
        }
    }
</style>