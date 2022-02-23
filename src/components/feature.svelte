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
            <img
                class="feature__illustration"
                src={feature.imageSrc}
                alt={feature.imageAlt}
            >
        </div>
        
        <div class="feature__body">
            <h3 class="feature__title">{ feature.name }</h3>
            <p class="feature__subtitle">{ feature.description }</p>
            <div class="feature__button">
                <Button color="blue">More Info</Button>
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
        }

        &__body {
            width: 100%;
            height: auto;

            @media screen and (min-width: variables.$screen-lg) {
                width: 50%;
                padding-left: 10rem;
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