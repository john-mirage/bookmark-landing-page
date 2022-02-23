<script lang="ts">
    import Presentation from '@components/presentation.svelte'
    import Tab from '@components/tab.svelte'
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

<template>
    <div class="features">
        <div class="features__container">
            <Presentation
                sectionTitle="Features"
                sectionSubtitle="Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go."
            />
            <ul class="features__tabs">
                {#each features as feature, index}
                    <Tab
                        active={activeFeatureIndex === index}
                        tabLabel={feature.tabName}
                        on:click={() => handleActiveFeature(index)}
                    />   
                {/each}
            </ul>
            <Feature feature={activeFeature} />
        </div>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .features {
        width: 100%;
        height: auto;
        padding-top: 10rem;
        padding-bottom: 10rem;

        &__container {
            @include mixins.container;
        }

        &__tabs {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: variables.$container-md;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 10rem;
            border-top: 0.1rem solid rgba(0, 0, 0, 0.1);

            @media screen and (min-width: variables.$screen-lg) {
                flex-direction: row;
                border: none;
            }
        }
    }
</style>