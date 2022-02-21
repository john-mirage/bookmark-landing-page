<script lang="ts">
    import BookmarkIcon from '@components/icon-bookmark.svelte'
    import IconButton from '@components/icon-button.svelte'
    import HamburgerIcon from '@components/icon-hamburger.svelte'
    import { onMount } from 'svelte';

    let topAppBarHasShadow = false
    function handleTopAppBarShadow() {
        if (!topAppBarHasShadow && window.scrollY > 0) {
            topAppBarHasShadow = true
        } else if (topAppBarHasShadow && window.scrollY <= 0) {
            topAppBarHasShadow = false
        }
    }

    onMount(() => {
        handleTopAppBarShadow()
    })
</script>

<svelte:window on:scroll={handleTopAppBarShadow} />

<template>
    <header class="top-app-bar" class:top-app-bar--shadow={topAppBarHasShadow}>
        <div class="top-app-bar__container">
            <div class="top-app-bar__content">
                <BookmarkIcon />
                <div class="top-app-bar__button" on:click>
                    <IconButton>
                        <HamburgerIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .top-app-bar {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        height: 8rem;
        background-color: variables.$color-white;

        &--shadow {
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
            height: auto;
        }

        &__container {
            @include mixins.container;
        }

        &__content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        &__button {
            width: auto;
            height: auto;
            margin-right: -1.2rem;
        }
    }
</style>