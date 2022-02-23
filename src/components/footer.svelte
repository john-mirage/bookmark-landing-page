<script lang="ts">
    import BookmarkIcon from '@components/icon-bookmark.svelte'
    import Navigation from '@components/navigation.svelte';
    import SocialNetworks from '@components/social-networks.svelte'
</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <a class="footer__logo" href="/">
                <BookmarkIcon textColor="#fff" />
            </a>
            <div class="footer__navigation">
                <Navigation onDark />
            </div>
            <div class="footer__social">
                <SocialNetworks />
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .footer {
        width: 100%;
        height: auto;
        padding-top: 4rem;
        padding-bottom: 4rem;
        background-color: variables.$color-very-dark-blue;

        &__container {
            @include mixins.container-2xl;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            @media screen and (min-width: variables.$screen-lg) {
                flex-direction: row;
            }
        }

        &__logo {
            width: 16rem;
            height: auto;

            @media screen and (min-width: variables.$screen-lg) {
                flex: 0 0 auto;
                margin-right: 8rem;
            }
        }

        &__navigation {
            margin-top: 2rem;
            margin-bottom: 2rem;

            @media screen and (min-width: variables.$screen-lg) {
                margin: 0;
            }
        }

        &__social {
            width: auto;
            height: auto;

            @media screen and (min-width: variables.$screen-lg) {
                flex: 0 0 auto;
                flex-direction: row;
                margin-left: auto;
            }
        }
    }
</style>