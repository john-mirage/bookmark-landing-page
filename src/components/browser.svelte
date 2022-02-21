<script lang="ts">
    import Button from '@components/button.svelte'
    interface Browser {
        name: string;
        minVersion: string;
        imageAlt: string;
        imageSrc: string;
    }
    export let browser: Browser
</script>

<template>
    <li class="browser">
        <img class="browser__logo" src={browser.imageSrc} alt={browser.imageAlt}>
        <h4 class="browser__name">Add to { browser.name }</h4>
        <p class="browser__min-version">Minimum version { browser.minVersion }</p>
        <div class="browser__divider"></div>
        <Button type="primary" browser>Add & Install Extension</Button>
    </li>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .browser {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: auto;
        padding: 2.4rem;
        background-color: variables.$color-white;
        border-radius: 1rem;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        margin-bottom: 4rem;

        &:last-child {
            margin-bottom: 0;
        }

        &__logo {
            margin-bottom: 4rem;
        }

        &__name {
            font-size: 2.4rem;
            font-weight: 500;
            color: variables.$color-very-dark-blue;
            line-height: 3.2rem;
            text-align: center;
            margin-bottom: 0.4rem;
        }

        &__min-version {
            font-size: 1.8rem;
            font-weight: 400;
            color: variables.$color-grayish-blue;
            line-height: 3rem;
            text-align: center;
            margin-bottom: 4rem;
        }

        &__divider {
            width: calc(100% + 4.8rem);
            height: 0.4rem;
            background-image: url(src/assets/images/bg-dots.svg);
            background-repeat: repeat-x;
            margin-left: -2.4rem;
            margin-right: -2.4rem;
            margin-bottom: 2.4rem;
        }
    }
</style>