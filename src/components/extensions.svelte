<script lang="ts">
    import Extension from '@components/extension.svelte'
    import ChromeLogo from '@assets/images/logo-chrome.svg'
    import FirefoxLogo from '@assets/images/logo-firefox.svg'
    import OperaLogo from '@assets/images/logo-opera.svg'
    const browsers = [
        {
            name: "Chrome",
            minVersion: "62",
            imageAlt: "Google Chrome logo",
            imageSrc: ChromeLogo,
        },
        {
            name: "Firefox",
            minVersion: "55",
            imageAlt: "Mozilla Firefox logo",
            imageSrc: FirefoxLogo,
        },
        {
            name: "Opera",
            minVersion: "46",
            imageAlt: "Opera logo",
            imageSrc: OperaLogo,
        },
    ]
</script>

<template>
    <div class="extensions">
        <div class="extensions__container">
            <h2 class="extensions__title">Download the extension</h2>
            <p class="extensions__subtitle">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
            <ul class="extensions__list">
                {#each browsers as browser}
                    <Extension browser={browser} />
                {/each}
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .extensions {
        width: 100%;
        height: auto;
        margin-bottom: 10rem;

        &__container {
            @include mixins.container;
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
        
        &__list {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;

            @media screen and (min-width: variables.$screen-md) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media screen and (min-width: variables.$screen-lg) {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }
</style>