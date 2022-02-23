<script lang="ts">
    import Presentation from '@components/presentation.svelte'
    import FrequentlyAskedQuestion from "@components/frequently-asked-question.svelte";
    import Button from "@components/button.svelte"
    const faqs = [
        {
            question: "What is Bookmark?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            question: "How can i request a new browser?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            question: "Is there a mobile app?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            question: "What about other Chromium browsers?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ]
</script>

<template>
    <div class="faqs">
        <div class="faqs__container">
            <Presentation
                sectionTitle="Frequently Asked Questions"
                sectionSubtitle="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
            />
            <ul class="faqs__list">
                {#each faqs as faq}
                    <FrequentlyAskedQuestion faq={faq} />
                {/each}
            </ul>
            <div class="faqs__button">
                <Button color="blue">More Info</Button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .faqs {
        width: 100%;
        height: auto;
        padding-top: 10rem;
        padding-bottom: 10rem;

        &__container {
            @include mixins.container;
        }

        &__list {
            width: 100%;
            max-width: variables.$container-md;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 4rem;
        }

        &__button {
            width: 20rem;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>