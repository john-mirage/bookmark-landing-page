<script lang="ts">
    import BookmarkIcon from '@components/icon-bookmark.svelte'
    import IconButton from '@components/icon-button.svelte'
    import HamburgerIcon from '@components/icon-hamburger.svelte'
</script>

<header class="top-app-bar">
    <div class="top-app-bar__content">
        <BookmarkIcon />
        <IconButton right>
            <HamburgerIcon />
        </IconButton>
    </div>
</header>

<style>
    .top-app-bar {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        height: 10rem;
        padding-left: 2.4rem;
        padding-right: 2.4rem;
        background-color: var(--color-white);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }

    .top-app-bar__content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
        padding-bottom: 2rem;
    }
</style>