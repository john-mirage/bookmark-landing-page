<script lang="ts">
    import Presentation from '@components/presentation.svelte'
    import FrequentlyAskedQuestion from "@components/frequently-asked-question.svelte";
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
        <Presentation
            sectionTitle="Frequently Asked Questions"
            sectionSubtitle="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
        />
        <ul class="faqs__list">
            {#each faqs as faq}
                <FrequentlyAskedQuestion faq={faq} />
            {/each}
        </ul>
        <button class="faqs__button">More Info</button>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .faqs {
        width: 100%;
        height: auto;
        padding-bottom: 10rem;

        &__list {
            @include mixins.container-md;
            width: 100%;
            height: auto;
            margin-bottom: 4rem;
        }

        &__button {
            display: block;
            padding: 2rem 3.2rem;
            border-radius: 0.6rem;
            background-color: variables.$color-soft-blue;
            color: variables.$color-white;
            font-size: 1.6rem;
            font-weight: 500;
            transition-property: color, background-color;
            transition-duration: 150ms;
            margin-left: auto;
            margin-right: auto;

            &:hover {
                background-color: transparent;
                outline: 0.2rem solid variables.$color-soft-blue;
                color: variables.$color-soft-blue;
            }
        }
    }
</style>