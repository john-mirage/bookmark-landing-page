<script lang="ts">
    import Shape from '@components/shape.svelte'
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
            <div class="feature__container">
                <img class="feature__illustration" src={feature.imageSrc} alt={feature.imageAlt}>
            </div>
            <Shape left />
        </div>
        
        <div class="feature__body">
            <div class="feature__container">
                <h3 class="feature__title">{ feature.name }</h3>
                <p class="feature__subtitle">{ feature.description }</p>
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

        &__container {
            @include mixins.container;
        }

        &__header {
            position: relative;
            width: 100%;
            height: auto;
            padding-bottom: 5rem;
            margin-bottom: 5rem;
        }

        &__illustration {
            position: relative;
            z-index: 20;
            width: 100%;
        }

        &__body {
            width: 100%;
            height: auto;
        }

        &__title {
            @include mixins.text-display;
            text-align: center;
            margin-bottom: 2rem;
        }

        &__subtitle {
            @include mixins.text-body;
            text-align: center;
            margin-bottom: 4rem;
        }
    }
</style>