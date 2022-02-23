<script lang="ts">
    import BookmarkIcon from '@components/icon-bookmark.svelte'
    import IconButton from '@components/icon-button.svelte';
    import CloseIcon from '@components/icon-close.svelte'
    import Button from '@components/button.svelte'
    import SocialNetworks from '@components/social-networks.svelte'

    const links = [
        "features",
        "princing",
        "contact",
    ]
</script>

<template>
    <aside class="drawer">
        <header class="drawer__header">
            <div class="drawer__logo">
                <BookmarkIcon
                    textColor="#fff"
                    circleColor="#fff"
                    iconColor="#252b46"
                />
            </div>
            <div class="drawer__close-button" on:click>
                <IconButton>
                    <CloseIcon />
                </IconButton>
            </div>
        </header>

        <div class="drawer__body">
            <nav class="drawer__navigation">
                {#each links as link}
                    <a class="drawer__navigation-item" href="/">{ link }</a>
                {/each}
            </nav>
            <Button isOutlined isUppercase>Login</Button>
        </div>

        <footer class="drawer__footer">
            <SocialNetworks />
        </footer>
    </aside>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .drawer {
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100vh;
        padding: 2.4rem;
        background-color: rgba(37, 43, 70, 0.95);
        overflow-y: auto;

        &__header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: auto;
            margin-bottom: 3rem;
        }

        &__logo {
            width: 20rem;
            height: auto;
        }

        &__close-button {
            margin-right: -1.6rem;
        }

        &__body {
            width: 100%;
            height: auto;
            margin-bottom: 4rem;
        }

        &__navigation {
            width: 100%;
            height: auto;
            margin-bottom: 2rem;
        }

        &__navigation-item {
            display: block;
            width: 100%;
            height: auto;
            padding-top: 2rem;
            padding-bottom: 2rem;
            border-top: 0.1rem solid rgba(255, 255, 255, 0.1);
            font-size: 2rem;
            font-weight: 400;
            color: variables.$color-white;
            text-decoration: none;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 0.4rem;

            &:last-child {
                border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
            }
        }

        &__footer {
            width: 100%;
            height: auto;
            margin-top: auto;
            margin-bottom: 1.6rem;
        }
    }
</style>