<script lang="ts">
    import FacebookIcon from '@components/icon-facebook.svelte'
    import TwitterIcon from '@components/icon-twitter.svelte'
</script>

<template>
    <ul class="social-networks">
        <li class="social-networks__item">
            <FacebookIcon />
        </li>
        <li class="social-networks__item">
            <TwitterIcon />
        </li>
    </ul>
</template>

<style lang="scss">
    .social-networks {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;

        &__item {
            margin-right: 4rem;

            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>