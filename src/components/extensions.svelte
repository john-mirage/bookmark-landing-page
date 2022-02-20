<script lang="ts">
    import Container from '@components/container.svelte'
    import Browser from '@components/browser.svelte'
    import ChromeLogo from '@assets/images/logo-chrome.svg'
    import FirefoxLogo from '@assets/images/logo-firefox.svg'
    import OperaLogo from '@assets/images/logo-opera.svg'
    const browsers = [
        {
            name: "Chrome",
            minVersion: "62",
            imageAlt: "Google Chrome logo",
            imageSrc: ChromeLogo,
        },
        {
            name: "Firefox",
            minVersion: "55",
            imageAlt: "Mozilla Firefox logo",
            imageSrc: FirefoxLogo,
        },
        {
            name: "Opera",
            minVersion: "46",
            imageAlt: "Opera logo",
            imageSrc: OperaLogo,
        },
    ]
</script>

<div class="extensions">
    <Container>
        <h2 class="extensions__title">Download the extension</h2>
        <p class="extensions__subtitle">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
        <ul class="extensions__browsers">
            {#each browsers as browser}
                <Browser browser={browser} />
            {/each}
        </ul>
    </Container>
</div>

<style>
    .extensions {
        width: 100%;
        height: auto;
    }

    .extensions__title {
        font-size: 2.8rem;
        font-weight: 500;
        color: var(--color-very-dark-blue);
        line-height: 3.2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    .extensions__subtitle {
        font-size: 1.8rem;
        font-weight: 400;
        color: var(--color-grayish-blue);
        line-height: 3rem;
        text-align: center;
        margin-bottom: 4rem;
    }
</style>