<script lang="ts">
    export let active: boolean
    export let tabLabel: string
    export let tabIndex: number
    export let setActiveTab: (newIndex: number) => void
</script>

<li class="tab" on:click={() => setActiveTab(tabIndex)}>
    <span class="tab__label">{ tabLabel }</span>
    {#if active}
        <div class="tab__line"></div>
    {/if}
</li>

<style>
    .tab {
        position: relative;
        width: 100%;
        height: auto;
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
    }

    .tab:last-child {
        border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
    }

    .tab__label {
        display: block;
        width: 100%;
        height: auto;
        font-size: 2rem;
        font-weight: 400;
        color: var(--color-very-dark-blue);
        text-align: center;
    }

    .tab__line {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        height: 0.4rem;
        background-color: var(--color-soft-red);
    }
</style>