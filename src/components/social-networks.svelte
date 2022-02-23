<script lang="ts">
    import FacebookLink from '@components/link-facebook.svelte'
    import TwitterLink from '@components/link-twitter.svelte'
</script>

<template>
    <nav class="social-networks">
        <FacebookLink />
        <TwitterLink />
    </nav>
</template>

<style lang="scss">
    .social-networks {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 8.8rem;
        height: auto;
    }
</style>