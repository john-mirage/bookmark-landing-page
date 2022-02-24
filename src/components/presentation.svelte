<script lang="ts">
    export let sectionTitle: string
    export let sectionSubtitle: string
</script>

<template>
    <div class="presentation">
        <h2 class="presentation__title">{ sectionTitle }</h2>
        <p class="presentation__subtitle">{ sectionSubtitle }</p>
    </div>
</template>

<style lang="scss">
    @use '../assets/styles/variables';
    @use '../assets/styles/mixins';

    .presentation {
        @include mixins.container-sm;
        margin-bottom: 6rem;

        &__title {
            @include mixins.text-display;
            text-align: center;
            margin-bottom: 2rem;
        }

        &__subtitle {
            @include mixins.text-body;
            text-align: center;
        }
    }
</style>