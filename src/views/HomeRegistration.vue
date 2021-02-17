<template>
    <section class="flex-auto flex justify-center">
        <div class="container content text-center">
            <form class="form">
                <fieldset>
                    <legend class="text-center text-big font-bold">{{$t('pages.titles.login')}}</legend>
                    <div class="flex flex-col mb-big">
                        <label for="login-email" class="input-label pb-small pl-small">{{ $t('labels.Email:')
                            }}</label>
                        <input v-model.trim="user.email" @input="hasResponseEmailError = false" type="email" id="login-email"
                               :placeholder="$t('placeholders.YourEmailDots')"
                               class="input" :class="{'has-error': hasResponseEmailError}" autocomplete="email">
                        <small v-if="!user.email" class="input-warning pt-smaller pl-small">
                            {{$t('warnings.requiredField')}}
                        </small>
                        <small v-else-if="!utilities.isValidEmail(user.email)"
                               class="input-warning pt-smaller pl-small">
                            {{$t('warnings.invalidEmail')}}
                        </small>
                        <small v-else class="input-ok pt-smaller pl-small">
                            {{$t('warnings.validField')}}
                        </small>
                    </div>
                    <div class="flex flex-col mt-10">
                        <label for="login-password" class="input-label pb-small pl-small">{{
                            $t('labels.Password:')}}</label>
                        <input v-model.trim="user.password" @input="hasResponsePasswordError = false" type="password" id="login-password"
                               :placeholder="$t('placeholders.YourPasswordDots')"
                               class="input" :class="{'has-error': hasResponsePasswordError}" autocomplete="current-password">
                        <small v-if="!utilities.isValidPassword(user.password)"
                               class="input-warning pt-smaller pl-small">
                            {{$t('warnings.passwordLengthRequirement', {min: minPasswordLength})}}
                        </small>
                        <small v-else class="input-ok pt-smaller pl-small">
                            {{$t('warnings.validField')}}
                        </small>
                    </div>
                    <div class="text-center">
                        <input v-on:click.prevent="login" :value="$t('labels.Login')"
                               :disabled="!user.email || !utilities.isValidEmail(user.email) || !utilities.isValidPassword(user.password)"
                               type="submit"
                               class="button w-full mt-bigger">
                    </div>
                </fieldset>
            </form>
        </div>
    </section>
</template>

<script>
    import BasicPage from '@/mixins/basicPage';
    // import utilities from '../utilities';
    // import database from '../database';
    //
    export default {
        name: "HomeRegistration",
        mixins: [BasicPage],
        components: {

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
