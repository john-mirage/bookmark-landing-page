<script lang="ts">
    interface Browser {
        name: string;
        minVersion: string;
        imageAlt: string;
        imageSrc: string;
    }
    export let browser: Browser
    export let index: number
</script>

<template>
    <li class={index > 0 ? `extension extension--${index + 1}` : "extension"}>
        <img class="extension__logo" src={browser.imageSrc} alt={browser.imageAlt}>
        <h4 class="extension__name">Add to { browser.name }</h4>
        <p class="extension__version">Minimum version { browser.minVersion }</p>
        <div class="extension__divider"></div>
        <button class="extension__button">Add & Install Extension</button>
    </li>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .extension {
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

        &:last-child {
            margin-bottom: 0;
        }

        &--2 {
            @media screen and (min-width: variables.$screen-lg) {
                transform: translateY(4rem);
            }
        }

        &--3 {
            @media screen and (min-width: variables.$screen-lg) {
                transform: translateY(8rem);
            }
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

        &__version {
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
            background-image: url(/bookmark-landing-page/src/assets/images/bg-dots.svg);
            background-repeat: repeat-x;
            margin-left: -2.4rem;
            margin-right: -2.4rem;
            margin-bottom: 2.4rem;
        }

        &__button {
            display: block;
            width: 100%;
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
</style>