<template>
    <header class="header">
        <div class="container flex">
            <h1 class="logo flex-auto">
                <router-link :to="'/'">{{$t('websiteName')}}</router-link>
            </h1>
            <language-switcher :class="'flex-none'" :mode="'home'"></language-switcher>
        </div>
    </header>
</template>

<script>
    import LanguageSwitcher from '@/components/LanguageSwitcher';

    export default {
        name: "Header",
        components: {
            LanguageSwitcher
        }
    }
</script>

<style scoped>
    .header {
        border-bottom: 1px solid var(--default-text-color-darker);
        background-color: var(--default-color-darker);
    }

    .logo {
        padding: 8px 12px;
        font-size: var(--font-size-bigger);
        font-weight: bold;
        color: var(--default-text-color-darker);
    }
</style>
