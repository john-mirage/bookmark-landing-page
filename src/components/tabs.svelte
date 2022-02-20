<script lang="ts">
    import Tab from '@components/tab.svelte'
    export let tabs: string[]
    export let activeTab: number
    export let setActiveTab: (newIndex: number) => void
</script>

<ul class="tabs">
    {#each tabs as tab, index}
        <Tab
            active={index === activeTab}
            tabLabel={tab}
            tabIndex={index}
            setActiveTab={setActiveTab}
        />
    {/each}
</ul>

<style>
    .tabs {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        margin-bottom: 10rem;
    }
</style>