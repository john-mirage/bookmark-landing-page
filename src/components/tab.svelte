<script lang="ts">
    export let active: boolean
    export let tabLabel: string
</script>

<template>
    <li class="tab" on:click>
        <span
            class="tab__label"
            class:tab__label--active={active}
            class:tab__label--not-active={!active}
        >
            { tabLabel }
        </span>
        {#if active}
            <div class="tab__line"></div>
        {/if}
    </li>
</template>

<style lang="scss">
    @use '../assets/styles/variables';

    .tab {
        position: relative;
        width: 100%;
        height: auto;
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
        cursor: pointer;

        &__label {
            display: block;
            width: 100%;
            height: auto;
            font-size: 1.8rem;
            font-weight: 400;
            color: variables.$color-grayish-blue;
            text-align: center;
            transition: color 150ms;

            &--active {
                color: variables.$color-very-dark-blue;
            }

            &--not-active {
                .tab:hover & {
                    color: variables.$color-soft-red;
                }
            }
        }
        
        &__line {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 50%;
            height: 0.4rem;
            background-color: variables.$color-soft-red;

            @media screen and (min-width: variables.$screen-lg) {
                width: 100%;
            }
        }
    }
</style>