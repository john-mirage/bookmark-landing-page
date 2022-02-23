<script lang="ts">
    import Button from '@components/button.svelte'
</script>

<template>
    <div class="contact">
        <div class="contact__container">
            <p class="contact__members">35,000+ already joined</p>
            <h2 class="contact__cta">Stay up-to-date with what we're doing</h2>
            <div class="contact__form">
                <input class="contact__input" placeholder="Enter your email address" type="text">
                <div class="contact__button">
                    <Button color="red" onDark>Contact Us</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .contact {
        margin-top: 4rem;
        padding-top: 6rem;
        padding-bottom: 6rem;
        width: 100%;
        height: auto;
        background-color: variables.$color-soft-blue;

        &__container {
            width: 100%;
            height: auto;
            padding-left: 2.4rem;
            padding-right: 2.4rem;

            @media screen and (min-width: variables.$screen-sm) {
                width: variables.$container-sm;
                margin-left: auto;
                margin-right: auto;
            }
        }

        &__members {
            font-size: 1.4rem;
            font-weight: 400;
            color: variables.$color-white;
            text-transform: uppercase;
            letter-spacing: 0.4rem;
            text-align: center;
            margin-bottom: 2rem;

            @media screen and (min-width: variables.$screen-md) {
                margin-bottom: 4rem;
            }
        }

        &__cta {
            font-size: 3rem;
            font-weight: 500;
            color: variables.$color-white;
            line-height: 4rem;
            text-align: center;
            margin-bottom: 4rem;
        }

        &__form {
            width: 100%;
            height: auto;

            @media screen and (min-width: variables.$screen-md) {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
            }
        }

        &__input {
            width: 100%;
            height: 4.8rem;
            background-color: variables.$color-white;
            border-radius: 0.6rem;
            margin-bottom: 2rem;
            padding-left: 2rem;
            padding-right: 2rem;
            font-size: 1.6rem;
            font-weight: 400;
            letter-spacing: 0.05rem;
            color: variables.$color-very-dark-blue;
            outline: none;
            border: none;

            &::placeholder {
                color: variables.$color-grayish-blue;
            }

            @media screen and (min-width: variables.$screen-md) {
                flex: 1 1 65%;
                margin-right: 2rem;
            }
        }

        &__button {
            width: 100%;
            height: auto;

            @media screen and (min-width: variables.$screen-md) {
                flex: 1 1 35%;
            }
        }
    }
</style>