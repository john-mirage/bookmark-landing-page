<script lang="ts">
    export let type: string
</script>

<button 
    class="button"
    class:button--primary={type === "primary"}
    class:button--secondary={type === "secondary"}
>
    <slot />
</button>

<style>
    .button {
        width: auto;
        height: auto;
        padding: 1.6rem 2rem;
        border-radius: 0.6rem;
        font-size: 1.6rem;
        font-weight: 500;
    }

    .button--primary {
        background-color: var(--color-soft-blue);
        color: var(--color-white);
    }

    .button--secondary {
        background-color: var(--color-white);
        color: var(--color-very-dark-blue);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
</style>