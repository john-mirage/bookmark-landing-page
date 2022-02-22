<script lang="ts">
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
            <h2 class="faqs__title">Frequently Asked Questions</h2>
            <p class="faqs__subtitle">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            <ul class="faqs__list">
                {#each faqs as faq}
                    <FrequentlyAskedQuestion faq={faq} />
                {/each}
            </ul>
            <Button type="primary" buttonWidth="auto" centered>More Info</Button>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .faqs {
        width: 100%;
        height: auto;
        margin-bottom: 10rem;

        &__container {
            @include mixins.container;
        }

        &__title {
            @include mixins.text-display;
            text-align: center;
            margin-bottom: 2rem;
        }

        &__subtitle {
            @include mixins.text-body;
            text-align: center;
            margin-bottom: 4rem;
        }

        &__list {
            width: 100%;
            height: auto;
            margin-bottom: 4rem;

            @media screen and (min-width: variables.$screen-md) {
                width: variables.$container-md;
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
</style>