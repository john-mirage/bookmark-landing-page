<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import TopAppBar from '@components/top-app-bar.svelte'
    import Hero from '@components/hero.svelte'
    import Features from '@components/features.svelte'
    import Extensions from '@components/extensions.svelte';
    import FrequentlyAskedQuestions from '@components/frequently-asked-questions.svelte'
    import Contact from '@components/contact.svelte'
    import Footer from '@components/footer.svelte'

    let topAppBarHasShadow = false

    function handleTopAppBarShadow() {
        if (!topAppBarHasShadow && window.scrollY > 0) {
            topAppBarHasShadow = true
        } else if (topAppBarHasShadow && window.scrollY <= 0) {
            topAppBarHasShadow = false
        }
    }

    onMount(() => {
        window.addEventListener("scroll", handleTopAppBarShadow)
    })

    onDestroy(() => {
        window.removeEventListener("scroll", handleTopAppBarShadow)
    })
</script>

<template>
    <main class="page">
        <TopAppBar hasShadow={topAppBarHasShadow} />
        <Hero />
        <Features />
        <Extensions />
        <FrequentlyAskedQuestions />
        <Contact />
        <Footer />
    </main>
</template>

<style lang="scss">
    .page {
        width: 100%;
        height: auto;
        padding-top: 8rem;
    }
</style>
