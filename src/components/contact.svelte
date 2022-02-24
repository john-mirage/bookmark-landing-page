<script lang="ts">
    import ErrorIcon from '@components/icon-error.svelte'
    import { string } from 'yup'

    let textInput
    let errorMessage: boolean = false

    async function handleSubmit() {
        console.log(textInput.classList)
        const testedEmail = textInput.value
        let schema = string().required().email()
        if (await schema.isValid(testedEmail)) {
            if (errorMessage) errorMessage = false
        } else {
            if (!errorMessage) errorMessage = true
        }
    }
</script>

<template>
    <div class="contact">
        <div class="contact__container">
            <p class="contact__members">35,000+ already joined</p>
            <h2 class="contact__cta">Stay up-to-date with what we're doing</h2>
            <div class="contact__form">
                <div class="contact__input">
                    <input
                        class="contact__text-input"
                        class:contact__text-input--error={errorMessage}
                        placeholder="Enter your email address"
                        type="text"
                        bind:this={textInput}
                    />
                    {#if errorMessage}
                        <p class="contact__error-message">Whoops, make sure it's an email</p>
                        <div class="contact__error-icon">
                            <ErrorIcon />
                        </div>
                    {/if}
                </div>
                <button class="contact__button" on:click={handleSubmit}>Contact Us</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .contact {
        margin-top: 4rem;
        padding-top: 6rem;
        padding-bottom: 6rem;
        width: 100%;
        height: auto;
        background-color: variables.$color-soft-blue;

        &__container {
            @include mixins.container-sm;
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
            position: relative;
            width: 100%;
            height: 5.4rem;
            margin-bottom: 3rem;

            @media screen and (min-width: variables.$screen-md) {
                flex: 1 1 65%;
                width: 65%;
                margin-right: 2rem;
                margin-bottom: 0;
            }
        }

        &__text-input {
            position: relative;
            z-index: 20;
            width: 100%;
            height: 100%;
            padding-left: 2rem;
            padding-right: 5.2rem;
            border-radius: 0.6rem;
            font-size: 1.6rem;
            font-weight: 400;
            letter-spacing: 0.05rem;
            color: variables.$color-very-dark-blue;
            background-color: variables.$color-white;
            outline: none;
            border: none;

            &--error {
                border: 0.2rem solid variables.$color-soft-red;
            }

            &::placeholder {
                color: variables.$color-grayish-blue;
            }
        }

        &__error-message {
            position: absolute;
            z-index: 10;
            bottom: 0;
            left: 0;
            width: 100%;
            height: auto;
            background-color: variables.$color-soft-red;
            font-size: 1.2rem;
            font-weight: 400;
            color: variables.$color-white;
            transform: translateY(calc(100% - 0.6rem));
            padding-top: 0.8rem;
            padding-bottom: 0.6rem;
            padding-left: 1rem;
            border-bottom-left-radius: 0.6rem;
            border-bottom-right-radius: 0.6rem;
            font-style: italic;
        }

        &__error-icon {
            position: absolute;
            z-index: 30;
            top: 50%;
            right: 1.6rem;
            width: auto;
            height: auto;
            transform: translateY(-50%);
        }

        &__button {
            display: block;
            width: 100%;
            height: 5.4rem;
            text-align: center;
            border-radius: 0.6rem;
            background-color: variables.$color-soft-red;
            color: variables.$color-white;
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 5.4rem;
            transition-property: color, background-color;
            transition-duration: 150ms;

            &:hover {
                background-color: variables.$color-white;
                outline: 0.2rem solid variables.$color-soft-red;
                color: variables.$color-soft-red;
            }

            @media screen and (min-width: variables.$screen-md) {
                flex: 1 1 35%;
                width: 35%;
            }
        }
    }
</style>