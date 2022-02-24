<script lang="ts">
    import BookmarkIcon from '@components/icon-bookmark.svelte'
    import IconButton from '@components/icon-button.svelte';
    import CloseIcon from '@components/icon-close.svelte'
    import SocialNetworks from '@components/social-networks.svelte'

    const links = [
        "features",
        "princing",
        "contact",
    ]
</script>

<template>
    <aside class="drawer">
        <div class="drawer__container">
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
                <button class="drawer__login-button">Login</button>
            </div>
    
            <footer class="drawer__footer">
                <SocialNetworks />
            </footer>
        </div>
    </aside>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .drawer {
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        background-color: rgba(37, 43, 70, 0.95);

        &__container {
            @include mixins.container-sm;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            min-height: 100vh;
            padding-top: 2.4rem;
            padding-bottom: 2.4rem;
        }

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
            width: 15rem;
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
        }

        &__navigation-item {
            display: block;
            width: 100%;
            height: auto;
            padding-top: 2rem;
            padding-bottom: 2rem;
            border-top: 0.1rem solid rgba(255, 255, 255, 0.1);
            font-size: 1.4rem;
            font-weight: 400;
            color: variables.$color-white;
            text-decoration: none;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 0.4rem;
            transition: color 150ms;

            &:hover {
                color: variables.$color-soft-red;
            }

            &:last-child {
                border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
            }
        }

        &__login-button {
            display: block;
            width: 100%;
            padding: 1.6rem 4rem;
            border-radius: 0.6rem;
            color: variables.$color-white;
            outline: 0.2rem solid variables.$color-white;
            font-size: 1.4rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            margin-top: 4rem;
            transition: color 150ms;

            &:hover {
                color: variables.$color-soft-red;
                outline: 0.2rem solid variables.$color-soft-red;
            }
        }

        &__footer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
            height: auto;
            margin-top: auto;
            margin-bottom: 1.6rem;
        }
    }
</style>