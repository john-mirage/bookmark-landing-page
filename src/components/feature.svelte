<script lang="ts">
    import Container from '@components/container.svelte'
    import Shape from '@components/shape.svelte'
    interface Feature {
        name: string;
        tabName: string;
        description: string;
        imageAlt: string;
        imageSrc: string;
    }
    export let feature: Feature
</script>

<div class="feature">
    <div class="feature__header">
        <Container>
            <img class="feature__illustration" src={feature.imageSrc} alt={feature.imageAlt}>
        </Container>
        <Shape left />
    </div>
    
    <div class="feature__body">
        <Container>
            <h3 class="feature__title">{ feature.name }</h3>
            <p class="feature__subtitle">{ feature.description }</p>
        </Container>
    </div>
</div>

<style>
    .feature {
        width: 100%;
        height: auto;
    }

    .feature__header {
        position: relative;
        width: 100%;
        height: auto;
        padding-bottom: 5rem;
        margin-bottom: 5rem;
    }

    .feature__illustration {
        position: relative;
        z-index: 20;
        width: 100%;
    }

    .feature__body {
        width: 100%;
        height: auto;
    }

    .feature__title {
        font-size: 2.8rem;
        font-weight: 500;
        color: var(--color-very-dark-blue);
        line-height: 3.2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    .feature__subtitle {
        font-size: 1.8rem;
        font-weight: 400;
        color: var(--color-grayish-blue);
        line-height: 3rem;
        text-align: center;
        margin-bottom: 4rem;
    }
</style>