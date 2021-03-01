<template>
    <section class="flex-auto flex justify-center">
        <div class="container content text-center">
            <div class="title-section flex flex-col m768-flex-row-reverse">
                <div class="login-holder flex-none flex items-center justify-center">
                    <button @click="toggleLoginPopup" class="login-button button flex items-center">{{$t('pages.titles.login')}}</button>
                    <p class="or">{{$t('labels.or')}}</p>
                    <router-link class="link" :to="'/registration'">{{$t('labels.Register')}}</router-link>
                </div>
                <h2 class="page-title flex-auto">{{$t('pages.names.Welcome')}}</h2>
            </div>
            <i18n path="pages.texts.pageHomeLoginDescription" tag="p" class="page-text text-block">
                <template #link>
                    <router-link class="link" :to="'/registration'">{{$t('labels.Register')}}</router-link>
                </template>
            </i18n>
        </div>
        <login-popup ref="loginPopup"></login-popup>
    </section>
</template>

<script>
    import BasicPage from '@/mixins/basicPage';
    import LoginPopup from '@/components/popups/LoginPopup';
    // import utilities from '../utilities';
    // import database from '../database';
    //
    export default {
        name: "HomeLogin",
        mixins: [BasicPage],
        components: {
            LoginPopup
        },
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                },
                // utilities: utilities
            }
        },
        methods: {
            toggleLoginPopup() {
                this.$refs.loginPopup.toggle();
            }
    //         login: function (event) {
    //             const component = this;
    //
    //             event.target.setAttribute('disabled', true);
    //
    //             database.user.login({
    //                 email: component.user.email,
    //                 password: component.user.password
    //             }).then(function (response) {
    //                 const data = response.data;
    //
    //                 database.localStorage.setItem('token', data.token);
    //
    //                 component.$router.push('app');
    //             }).catch(function (error) {
    //                 alert(component.$i18n.t(error.response.data.message));
    //             }).finally(function () {
    //                 event.target.removeAttribute('disabled');
    //             });
    //         }
        }
    }
</script>

<style scoped>
    .login-holder {
        padding-top: 8px;
        padding-bottom: 8px;
    }

    .login-button {
        border-radius: 4px;
    }

    .title-section {

    }

    .page-title {
        padding-top: 32px;
        padding-bottom: 32px;
    }

    .page-text {
        padding-bottom: 32px;
    }

    h2 {
        font-size: var(--font-size-biggest);
        font-weight: bold;
    }

    .email-input {
        width: 150px;
        max-width: 150px;
        border-right: none;
        border-radius: 4px 0 0 4px;
    }

    .password-input {

    }

    .or {
        padding: 8px;
        font-size: var(--font-size-small);
    }
</style>
