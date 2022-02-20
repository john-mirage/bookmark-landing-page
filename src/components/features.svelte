<script lang="ts">
    import Container from '@components/container.svelte'
    import Tabs from '@components/tabs.svelte'
    import Feature from '@components/feature.svelte'
    import TabImage1 from '@assets/images/illustration-features-tab-1.svg'
    import TabImage2 from '@assets/images/illustration-features-tab-2.svg'
    import TabImage3 from '@assets/images/illustration-features-tab-3.svg'

    const features = [
        {
            name: "Bookmark in one click",
            tabName: "Simple Bookmarking",
            description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorites sites.",
            imageAlt: "Tab illustration 1",
            imageSrc: TabImage1,
        },
        {
            name: "Intelligent search",
            tabName: "Speedy Searching",
            description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
            imageAlt: "Tab illustration 2",
            imageSrc: TabImage2,
        },
        {
            name: "Share your bookmarks",
            tabName: "Easy Sharing",
            description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
            imageAlt: "Tab illustration 3",
            imageSrc: TabImage3,
        },
    ]

    let activeFeatureIndex = 0
    let activeFeature = features[activeFeatureIndex]

    function handleActiveFeature(newIndex: number): void {
        if (activeFeatureIndex !== newIndex) {
            activeFeatureIndex = newIndex
            activeFeature = features[activeFeatureIndex]
        }
    }
</script>

<div class="features">
    <Container>
        <h2 class="features__title">Features</h2>
        <p class="features__subtitle">Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        <Tabs
            tabs={features.map(feature => feature.tabName)}
            activeTab={activeFeatureIndex}
            setActiveTab={handleActiveFeature}
        />
    </Container>

    <Feature
        feature={activeFeature}
    />
</div>

<style>
    .features {
        width: 100%;
        height: auto;
        margin-bottom: 10rem;
    }

    .features__title {
        font-size: 2.8rem;
        font-weight: 500;
        color: var(--color-very-dark-blue);
        line-height: 3.2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    .features__subtitle {
        font-size: 1.8rem;
        font-weight: 400;
        color: var(--color-grayish-blue);
        line-height: 3rem;
        text-align: center;
        margin-bottom: 4rem;
    }
</style>