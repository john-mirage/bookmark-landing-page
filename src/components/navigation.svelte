<script lang="ts">
    export let onDark: boolean = false
    export let onLight: boolean = false
    const items = [
        "features",
        "pricing",
        "contact",
    ]
</script>

<template>
    <nav class="navigation">
        {#each items as item}
            <a class="navigation__link" href="/">
                <span
                    class="navigation__item"
                    class:navigation__item--on-dark={onDark}
                    class:navigation__item--on-light={onLight}
                >
                    { item }
                </span>
            </a>
        {/each}
    </nav>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .navigation {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: auto;
        height: auto;

        @media screen and (min-width: variables.$screen-md) {
            flex-direction: row;
            margin-left: -2rem;
            margin-right: -2rem;
        }

        &__link {
            display: block;
            padding: 2rem;

            @media screen and (min-width: variables.$screen-lg) {
                padding: 1rem 2rem;
            }
        }

        &__item {
            font-size: 1.4rem;
            font-weight: 400;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 0.15rem;
            transition: color 150ms;

            &--on-dark {
                color: variables.$color-white;
            }

            &--on-light {
                color: variables.$color-very-dark-blue;
            }

            .navigation__link:hover & {
                color: variables.$color-soft-red;
            }
        }
    }
</style>