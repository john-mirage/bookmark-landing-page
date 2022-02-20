<script lang="ts">
    import Container from '@components/container.svelte'
    import Button from '@components/button.svelte'
</script>

<div class="hero">
    <div class="hero__header">
        <img class="hero__illustration" src="src/assets/images/illustration-hero.svg" alt="Tablet illustration">
        <div class="hero__shape"></div>
    </div>

    <div class="hero__body">
        <Container>
            <h1 class="hero__title">A simple Bookmark Manager</h1>
            <p class="hero__subtitle">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div class="hero__actions">
                <Button type="primary">Get it on Chrome</Button>
                <Button type="secondary">Get it on Firefox</Button>
            </div>
        </Container>
    </div>
</div>

<style>
    .hero {
        width: 100%;
        height: auto;
        padding-top: 5rem;
    }

    .hero__header {
        position: relative;
        width: 100%;
        height: auto;
    }

    .hero__illustration {
        position: relative;
        z-index: 20;
    }

    .hero__shape {
        position: absolute;
        z-index: 10;
        bottom: 0;
        right: 0;
        width: 80%;
        height: 80%;
        border-top-left-radius: 9999px;
        border-bottom-left-radius: 9999px;
        background-color: var(--color-soft-blue);
    }

    .hero__body {
        width: 100%;
        height: auto;
    }
</style>