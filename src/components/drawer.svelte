<script lang="ts">
    import BookmarkIcon from '@components/icon-bookmark.svelte'
    import IconButton from '@components/icon-button.svelte';
    import CloseIcon from '@components/icon-close.svelte'
    import SocialNetworks from '@components/social-networks.svelte'
</script>

<template>
    <div class="drawer">
        <header class="drawer__header">
            <BookmarkIcon
                textColor="#fff"
                circleColor="#fff"
                iconColor="#252b46"
            />
            <div class="drawer__close-icon" on:click>
                <IconButton>
                    <CloseIcon />
                </IconButton>
            </div>
        </header>

        <div class="drawer__body">

        </div>

        <footer class="drawer__footer">
            <SocialNetworks />
        </footer>
    </div>
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
        height: 100%;
        padding: 2.4rem;
        background-color: rgba(37, 43, 70, 0.9);

        &__header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: auto;
        }

        &__close-icon {
            margin-right: -1.6rem;
        }

        &__body {

        }

        &__footer {
            margin-top: auto;
            margin-bottom: 1.6rem;
        }
    }
</style>