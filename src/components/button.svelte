<script lang="ts">
    export let type: string
    export let hero: boolean = false
    export let browser: boolean = false
</script>

<button
    class="button"
    class:button--primary={type === "primary"}
    class:button--secondary={type === "secondary"}
    class:button--hero={hero}
    class:button--browser={browser}
>
    <span class="button__label">
        <slot />
    </span>
</button>

<style>
    .button {
        display: flex;
        border-radius: 0.6rem;
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

    .button--hero {
        width: calc(50% - 1rem);
        height: 6rem;
    }

    .button--browser {
        width: 100%;
        height: 6rem;
    }

    .button__label {
        display: block;
        margin: auto;
        font-size: 1.6rem;
        font-weight: 500;
    }
</style>