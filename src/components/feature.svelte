<script lang="ts">
    import CallToAction from '@components/call-to-action.svelte'
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
        <CallToAction leftShape>
            <svelte:fragment slot="left">
                <img
                    class="feature__illustration"
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                >
            </svelte:fragment>

            <svelte:fragment slot="right">
                <h3 class="feature__title">{ feature.name }</h3>
                <p class="feature__subtitle">{ feature.description }</p>
                <div class="feature__button">
                    <Button color="blue">More Info</Button>
                </div>
            </svelte:fragment>
        </CallToAction>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .feature {
        width: 100%;
        height: auto;
        padding-top: 5rem;
        padding-bottom: 10rem;

        &__illustration {
            position: relative;
            z-index: 20;
            width: 100%;
            height: auto;
            padding-bottom: 12%;
        }

        &__title {
            max-width: variables.$container-sm;
            @include mixins.text-display;
            text-align: center;
            margin-top: 6rem;
            margin-bottom: 2rem;

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

        &__button {
            display: none;

            @media screen and (min-width: variables.$screen-lg) {
                display: block;
                width: 20rem;
            }
        }
    }
</style>