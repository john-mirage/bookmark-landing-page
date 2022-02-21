<script lang="ts">
    import Shape from '@components/shape.svelte'
    import Button from '@components/button.svelte'
</script>

<template>
    <div class="hero">
        <div class="hero__header">
            <img class="hero__illustration" src="src/assets/images/illustration-hero.svg" alt="Tablet illustration">
            <Shape right />
        </div>
    
        <div class="hero__body">
            <div class="hero__container">
                <h1 class="hero__title">A simple Bookmark Manager</h1>
                <p class="hero__subtitle">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div class="hero__actions">
                    <Button hero type="primary">Get it on Chrome</Button>
                    <Button hero type="secondary">Get it on Firefox</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .hero {
        width: 100%;
        height: auto;
        padding-top: 5rem;
        padding-bottom: 10rem;

        &__container {
            @include mixins.container;
        }

        &__header {
            position: relative;
            width: 100%;
            height: auto;
            margin-bottom: 4rem;
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
            font-size: 3.6rem;
            font-weight: 500;
            color: var(--color-very-dark-blue);
            line-height: 4.4rem;
            text-align: center;
            margin-bottom: 2rem;
        }

        &__subtitle {
            @include mixins.text-body;
            text-align: center;
            margin-bottom: 4rem;
        }

        &__actions {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
        }
    }
</style>