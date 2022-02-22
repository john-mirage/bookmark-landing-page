<script lang="ts">
    import IconButton from '@components/icon-button.svelte'
    import ArrowIcon from '@components/icon-arrow.svelte'
    interface Faq {
        question: string;
        answer: string;
    }
    export let faq: Faq
    let faqIsActive = false
</script>

<template>
    <li class="faq" on:click={() => faqIsActive = !faqIsActive}>

        <div class="faq__question">
            <h4 class="faq__question-text">{ faq.question }</h4>
            <div class="faq__question-button" style:transform={faqIsActive ? "rotate(180deg)" : "none"}>
                <IconButton>
                    <ArrowIcon />
                </IconButton>
            </div>
        </div>

        {#if faqIsActive}
            <div class="faq__answer">
                <p class="faq__answer-text">{ faq.answer }</p>
            </div>
        {/if}
    </li>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .faq {
        width: 100%;
        height: auto;
        border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);

        &__question {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        &__question-text {
            flex: 1 1 0;
            font-size: 1.8rem;
            font-weight: 400;
            color: variables.$color-very-dark-blue;
            line-height: 2.8rem;
        }

        &__question-button {
            flex: 0 0 4.8rem;
            margin-right: -1.2rem;
        }

        &__answer {
            width: 100%;
            height: auto;
            padding-bottom: 2rem;

            @media screen and (min-width: variables.$screen-md) {
                padding-right: 6.8rem;
            }
        }

        &__answer-text {
            font-size: 1.6rem;
            font-weight: 400;
            color: variables.$color-grayish-blue;
            line-height: 2.4rem;
        }
    }
</style>