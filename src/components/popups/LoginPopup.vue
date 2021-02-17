<template>
    <div v-if="display" @click.self="toggle()" class="popup fixed py-bigger">
        <div class="popup-content relative">
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
            <button @click.self="toggle()" class="popup-close-button absolute flex items-center justify-center">&times;</button>
        </div>
    </div>
</template>

<script>
    import utilities from '@/utilities';
    import Constants from '@/utilities/constants';
    import notify from '@/mixins/notify';
    import popup from '@/mixins/popup';
    import request from '@/mixins/request';

    export default {
        name: "LoginPopup",
        mixins: [notify, popup, request],
        data: function () {
            return {
                utilities,
                minPasswordLength: Constants.minPasswordLength,
                display: false,
                user: {
                    email: undefined,
                    password: undefined
                },
                hasResponseEmailError: false,
                hasResponsePasswordError: false
            }
        },
        methods: {
            login(event) {
                const component = this;

                if(!utilities.isValidEmail(component.user.email)) {
                    return component.hasResponseEmailError = true;
                }

                if (!utilities.isValidPassword(component.user.password)) {
                    return component.hasResponsePasswordError = true;
                }

                event.target.disabled = true;

                component.ajax('get', 'user', component.user)
                    .then((response) => {

                    }).catch((error) => {
                        component.notify({
                            mode: 'error',
                            title: component.$i18n.t('notifications.title.Error'),
                            text:  component.$i18n.t('notifications.text.generalServerError'),
                            closeCallback: () => {
                                event.target.disabled = false;
                            }
                        })
                    });
            }
        }
    }
</script>

<style scoped src="../../assets/css/popups.css">

</style>
