<template>
    <div class="flex flex-col w-full">
        <main-header></main-header>
        <section class="flex-auto flex items-center justify-center">
            <div class="container content text-center">
                <h1 class="py-bigger font-bold text-biggest">404</h1>
                <h2 class="text-big">{{$t('pages.names.NotFound')}}</h2>
                <p class="py-big">{{$t('pages.texts.pageNotFoundGoToHome')}}</p>
                <router-link :to="'/'" class="link">{{$t('labels.GoBackToHomepage')}} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></router-link>
            </div>
        </section>
        <main-footer></main-footer>
    </div>
</template>

<script>
    import MainHeader from '@/components/Header';
    import MainFooter from '@/components/Footer';
    import BasicPage from '@/mixins/basicPage';

    export default {
        name: "NotFound",
        mixins: [BasicPage],
        components: {
            MainHeader,
            MainFooter
        }
    }
</script>

<style scoped>

</style>
