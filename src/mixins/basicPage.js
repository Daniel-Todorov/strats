export default {
    mounted () {
        const title = this.$route.meta.title ? `pages.titles.${this.$route.meta.title}` : 'websiteName';

        document.title = this.$i18n.t(title);
    }
};
