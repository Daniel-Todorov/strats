<template>
    <section class="flex-auto flex justify-center">
        <div class="container content flex items-center justify-center">
            <form class="form">
                <fieldset>
                    <legend class="mb-big text-center text-big font-bold">{{$t('pages.names.Registration')}}</legend>
                    <div class="flex flex-col mb-big">
                        <label for="registration-email" class="input-label pb-small pl-small">{{ $t('labels.Email:') }}</label>
                        <input v-model.trim="user.email" @input="hasResponseEmailError = false" type="email" id="registration-email"
                               :placeholder="$t('placeholders.YourEmailDots')"
                               class="input" :class="{'has-error': hasResponseEmailError}" autocomplete="off">
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
                    <div class="flex flex-col mb-big">
                        <label for="registration-password" class="input-label pb-small pl-small">{{
                            $t('labels.Password:')}}</label>
                        <input v-model.trim="user.password" @input="hasResponsePasswordError = false" type="password" id="registration-password"
                               :placeholder="$t('placeholders.YourPasswordDots')"
                               class="input" :class="{'has-error': hasResponsePasswordError}" autocomplete="off">
                        <small v-if="!utilities.isValidPassword(user.password)"
                               class="input-warning pt-smaller pl-small">
                            {{$t('warnings.passwordLengthRequirement', {min: minPasswordLength})}}
                        </small>
                        <small v-else class="input-ok pt-smaller pl-small">
                            {{$t('warnings.validField')}}
                        </small>
                    </div>
                    <div class="flex flex-col">
                        <label for="repeat-password" class="input-label pb-small pl-small">{{
                            $t('labels.RepeatPassword:')}}</label>
                        <input v-model.trim="user.repeatPassword" @input="hasResponseRepeatPasswordError = false" type="password" id="repeat-password"
                               :placeholder="$t('placeholders.RepeatYourPasswordDots')"
                               class="input" :class="{'has-error': hasResponseRepeatPasswordError}" autocomplete="off">
                        <small v-if="user.password !== user.repeatPassword || !user.repeatPassword"
                               class="input-warning pt-smaller pl-small">
                            {{$t('warnings.repeatPasswordMismatch')}}
                        </small>
                        <small v-else class="input-ok pt-smaller pl-small">
                            {{$t('warnings.validField')}}
                        </small>
                    </div>
                    <div class="text-center">
                        <input v-on:click.prevent="register" :value="$t('labels.Register')"
                               :disabled="!user.email || !utilities.isValidEmail(user.email) || !utilities.isValidPassword(user.password) || user.password !== user.repeatPassword"
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
    import utilities from '@/utilities';
    import constants from '@/utilities/constants';
    import request from '@/mixins/request';
    import notify from '@/mixins/notify';

    export default {
        name: "HomeRegistration",
        mixins: [BasicPage, request, notify],
        components: {

        },
        data() {
            return {
                hasResponseEmailError: false,
                hasResponsePasswordError: false,
                hasResponseRepeatPasswordError: false,
                minPasswordLength: constants.minPasswordLength,
                user: {
                    email: '',
                    password: '',
                    repeatPassword: ''
                },
                utilities: utilities
            }
        },
        methods: {
            register: function (event) {
                const component = this;

                event.target.setAttribute('disabled', true);

                component.ajax('post', 'user', component.user)
                    .then((response) => {
                        console.log(response);
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

<style scoped>
    h2 {
        font-size: var(--font-size-biggest);
        font-weight: bold;
    }
</style>
