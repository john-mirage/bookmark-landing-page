<script lang="ts">
    import BookmarkIcon from '@components/icon-bookmark.svelte'
    import SocialNetworks from '@components/social-networks.svelte'
    const links = [
        "features",
        "pricing",
        "contact",
    ]
</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__logo">
                <BookmarkIcon textColor="#fff" />
            </div>
            <nav class="footer__navigation">
                {#each links as link}
                    <a class="footer__link" href="/">{ link }</a>
                {/each}
            </nav>
            <div class="footer__social-networks">
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
            @include mixins.container;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            @media screen and (min-width: variables.$screen-md) {
                flex-direction: row;
            }
        }

        &__logo {
            width: auto;
            height: auto;

            @media screen and (min-width: variables.$screen-md) {
                flex: 0 0 auto;
            }
        }

        &__navigation {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: auto;
            height: auto;
            margin-top: 4rem;

            @media screen and (min-width: variables.$screen-md) {
                flex: 1 1 0%;
                flex-direction: row;
                margin-top: 0;
                margin-left: 6rem;
            }
        }

        &__link {
            font-size: 1.6rem;
            font-weight: 400;
            color: variables.$color-white;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 0.2rem;
            margin-bottom: 4rem;

            @media screen and (min-width: variables.$screen-md) {
                margin-bottom: 0;
                margin-right: 2rem;
            }
        }

        &__social-networks {
            width: auto;
            height: auto;

            @media screen and (min-width: variables.$screen-md) {
                flex: 0 0 auto;
                flex-direction: row;
                margin-left: auto;
            }
        }
    }
</style>