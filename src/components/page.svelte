<script lang="ts">
    import TopAppBar from '@components/top-app-bar.svelte'
    import Hero from '@components/hero.svelte'
    import Features from '@components/features.svelte'
    import Extensions from '@components/extensions.svelte';
</script>

<template>
    <main class="page">
        <TopAppBar />
        <Hero />
        <Features />
        <Extensions />
    </main>
</template>

<style lang="scss">
    .page {
        width: 100%;
        height: auto;
        padding-top: 10rem;
        padding-bottom: 10rem;
    }
</style>
