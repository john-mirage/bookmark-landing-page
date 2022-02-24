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
                <div class="feature__content">
                    <h3 class="feature__title">{ feature.name }</h3>
                    <p class="feature__subtitle">{ feature.description }</p>
                    <button class="feature__button">More Info</button>
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

        &__illustration {
            position: relative;
            z-index: 20;
            width: 100%;
            height: auto;
            padding-bottom: 18%;
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
            }
        }

        &__title {
            max-width: variables.$container-sm;
            @include mixins.text-display;
            margin-top: 6rem;
            margin-bottom: 2rem;

            @media screen and (min-width: variables.$screen-lg) {
                margin-top: 0;
            }
        }

        &__subtitle {
            max-width: variables.$container-sm;
            @include mixins.text-body;
            margin-bottom: 3rem;
        }

        &__button {
            display: none;

            @media screen and (min-width: variables.$screen-lg) {
                display: block;
                padding: 2rem 3.2rem;
                border-radius: 0.6rem;
                background-color: variables.$color-soft-blue;
                color: variables.$color-white;
                font-size: 1.6rem;
                font-weight: 500;
                transition-property: color, background-color;
                transition-duration: 150ms;

                &:hover {
                    background-color: transparent;
                    outline: 0.2rem solid variables.$color-soft-blue;
                    color: variables.$color-soft-blue;
                }
            }
        }
    }
</style>