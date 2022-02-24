<script lang="ts">
    import TopAppBar from '@components/top-app-bar.svelte'
    import Drawer from '@components/drawer.svelte'
    import Hero from '@components/hero.svelte'
    import Features from '@components/features.svelte'
    import Extensions from '@components/extensions.svelte';
    import FrequentlyAskedQuestions from '@components/frequently-asked-questions.svelte'
    import Contact from '@components/contact.svelte'
    import Footer from '@components/footer.svelte'

    let drawerIsOpen: boolean = false
    let scrollY: string = '0px'

    function openDrawer() {
        if (!drawerIsOpen) {
            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollY}`
            document.body.style.left = '0'
            document.body.style.width = '100%'
            drawerIsOpen = true
        }
    }

    function closeDrawer() {
        if (drawerIsOpen) {
            const newScrollY: string = document.body.style.top;
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.left = ''
            document.body.style.width = ''
            window.scrollTo(0, parseInt(newScrollY || '0') * -1)
            drawerIsOpen = false
        }
    }

    function handleScroll() {
        scrollY = `${window.scrollY}px`
    }
</script>

<svelte:window on:scroll={handleScroll} />

<template>
    <main class="page">
        {#if drawerIsOpen}
            <Drawer on:click={closeDrawer} />
        {:else}
            <TopAppBar on:click={openDrawer} />
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
