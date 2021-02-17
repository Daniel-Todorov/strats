<template>
    <footer class="footer text-center">
        <div class="container">
            <small v-html="$t('footer.createdByAuthor')"></small>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        padding: 4px 12px;
        font-size: var(--font-size-smallest);
        border-top: 1px solid var(--default-text-color-darker);
        color: var(--default-text-color-darker);
        background-color: var(--default-color-darker);
    }
</style>
