<script lang="ts">

</script>

<div class="container">
    <slot />
</div>

<style>
    .container {
        width: 100%;
        height: 100%;
        padding-left: 2.4rem;
        padding-right: 2.4rem;
    }

    @media screen and (min-width: 576px) {
        .container {
            width: var(--container-sm);
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media screen and (min-width: 768px) {
        .container {
            width: var(--container-md);
        }
    }

    @media screen and (min-width: 992px) {
        .container {
            width: var(--container-lg);
        }
    }

    @media screen and (min-width: 1200px) {
        .container {
            width: var(--container-xl);
        }
    }

    @media screen and (min-width: 1400px) {
        .container {
            width: var(--container-2xl);
        }
    }
</style>