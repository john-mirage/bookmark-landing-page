<script lang="ts">
    import TopAppBar from '@components/top-app-bar.svelte'
    import Hero from '@components/hero.svelte'
    import Features from '@components/features.svelte'
    import Extensions from '@components/extensions.svelte';
    import FrequentlyAskedQuestions from '@components/frequently-asked-questions.svelte'
    import Contact from '@components/contact.svelte'
    import Footer from '@components/footer.svelte'
</script>

<template>
    <main class="page">
        <TopAppBar />
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
        padding-top: 10rem;
    }
</style>
