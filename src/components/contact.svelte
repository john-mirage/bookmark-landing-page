<script lang="ts">
    import Button from '@components/button.svelte'
</script>

<template>
    <div class="contact">
        <div class="contact__container">
            <p class="contact__members">35,000+ already joined</p>
            <h2 class="contact__cta">Stay up-to-date with what we're doing</h2>
            <input class="contact__input" placeholder="Enter your email address" type="text">
            <Button type="contact">Contact Us</Button>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .contact {
        padding-top: 6rem;
        padding-bottom: 6rem;
        width: 100%;
        height: auto;
        background-color: variables.$color-soft-blue;

        &__container {
            @include mixins.container;
        }

        &__members {
            font-size: 1.4rem;
            font-weight: 400;
            color: variables.$color-white;
            text-transform: uppercase;
            letter-spacing: 0.4rem;
            text-align: center;
            margin-bottom: 2rem;
        }

        &__cta {
            font-size: 3rem;
            font-weight: 500;
            color: variables.$color-white;
            text-align: center;
            margin-bottom: 4rem;
        }

        &__input {
            width: 100%;
            height: 6rem;
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
        }
    }
</style>