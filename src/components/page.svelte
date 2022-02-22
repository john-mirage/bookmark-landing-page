<script lang="ts">
    import TopAppBar from '@components/top-app-bar.svelte'
    import Drawer from '@components/drawer.svelte'
    import Hero from '@components/hero.svelte'
    import Features from '@components/features.svelte'
    import Extensions from '@components/extensions.svelte';
    import FrequentlyAskedQuestions from '@components/frequently-asked-questions.svelte'
    import Contact from '@components/contact.svelte'
    import Footer from '@components/footer.svelte'

    let drawerIsOpen = false

    function handleDrawer(state: boolean) {
        drawerIsOpen = state
    }
</script>

<template>
    <main class="page">
        {#if drawerIsOpen}
            <Drawer on:click={() => handleDrawer(false)} />
        {:else}
            <TopAppBar on:click={() => handleDrawer(true)} />
        {/if}
        <Hero />
        <Features />
        <Extensions />
        <FrequentlyAskedQuestions />
        <Contact />
        <Footer />
    </main>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .page {
        width: 100%;
        height: auto;
        padding-top: 8rem;

        @media screen and (min-width: variables.$screen-lg) {
            padding-top: 10rem;
        }
    }
</style>
