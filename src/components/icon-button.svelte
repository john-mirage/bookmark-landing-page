<script lang="ts">
    export let right: boolean
</script>

<button class="icon-button" class:icon-button--right={right}>
    <span class="icon-button__icon">
        <slot />
    </span>
</button>

<style>
    .icon-button {
        display: flex;
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 9999px;
    }

    .icon-button--right {
        margin-right: -1.2rem;
    }

    .icon-button__icon {
        display: block;
        margin: auto;
    }
</style>