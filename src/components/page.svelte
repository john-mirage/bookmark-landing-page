<script lang="ts">
    import TopAppBar from '@components/top-app-bar.svelte'
    import Hero from '@components/hero.svelte'
    import Features from '@components/features.svelte'
</script>

<main class="page">
    <TopAppBar />
    <Hero />
    <Features />
</main>

<style>
    :root {
        --color-soft-blue: hsl(231, 69%, 60%);
        --color-soft-red: hsl(0, 94%, 66%);
        --color-grayish-blue: hsl(229, 8%, 60%);
        --color-very-dark-blue: hsl(229, 31%, 21%);
        --color-white: hsl(0, 0%, 100%);

        --screen-sm: 576px;
        --screen-md: 768px;
        --screen-lg: 992px;
        --screen-xl: 1200px;
        --screen-2xl: 1400px;
        
        --container-sm: 540px;
        --container-md: 720px;
        --container-lg: 960px;
        --container-xl: 1140px;
        --container-2xl: 1320px;

        --text-body-size: 1.8rem;
    }

    .page {
        width: 100%;
        height: auto;
        padding-top: 10rem;
        padding-bottom: 10rem;
    }
</style>
