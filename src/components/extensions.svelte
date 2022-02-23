<script lang="ts">
    import Presentation from '@components/presentation.svelte'
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
        <Presentation
            sectionTitle="Download the extension"
            sectionSubtitle="We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize."
        />
        <ul class="extensions__list">
            {#each browsers as browser, index}
                <Extension
                    browser={browser}
                    index={index}
                />
            {/each}
        </ul>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .extensions {
        width: 100%;
        height: auto;
        padding-top: 10rem;
        padding-bottom: 10rem;

        @media screen and (min-width: variables.$screen-lg) {
            margin-bottom: 8rem;
        }
        
        &__list {
            @include mixins.container-xl;
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