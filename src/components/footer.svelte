<script lang="ts">
    import BookmarkIcon from '@components/icon-bookmark.svelte'
    import FacebookIcon from '@components/icon-facebook.svelte'
    import TwitterIcon from '@components/icon-twitter.svelte'
    const links = [
        "features",
        "pricing",
        "contact",
    ]
</script>

<template>
    <footer class="footer">
        <BookmarkIcon textColor="#fff" />
        <nav class="footer__navigation">
            {#each links as link}
                <a class="footer__link" href="#">{ link }</a>
            {/each}
        </nav>
        <div class="footer__social-networks">
            <FacebookIcon />
            <TwitterIcon />
        </div>
    </footer>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .footer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: auto;
        padding-top: 4rem;
        padding-bottom: 4rem;
        background-color: variables.$color-very-dark-blue;

        &__navigation {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: auto;
            margin-top: 4rem;
            margin-bottom: 6rem;
        }

        &__link {
            font-size: 1.6rem;
            font-weight: 400;
            color: variables.$color-white;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 0.2rem;
            margin-bottom: 4rem;

            &:last-child {
                margin-bottom: 0;
            }
        }

        &__social-networks {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 10rem;
            height: auto;
        }
    }
</style>