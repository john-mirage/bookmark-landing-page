<script lang="ts">
    export let right: boolean = false
    export let left: boolean = false
</script>

<div
    class="shape"
    class:shape--right={right}
    class:shape--left={left}
></div>

<style>
    .shape {
        position: absolute;
        z-index: 10;
        bottom: 0;
        width: 80%;
        height: 80%;
        background-color: var(--color-soft-blue);
    }

    .shape--right {
        right: 0;
        border-top-left-radius: 9999px;
        border-bottom-left-radius: 9999px;
    }

    .shape--left {
        left: 0;
        border-top-right-radius: 9999px;
        border-bottom-right-radius: 9999px;
    }
</style>