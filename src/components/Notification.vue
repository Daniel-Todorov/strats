<template>
    <div v-if="display" @click.self="close('closeCallback', $event)" class="notification fixed flex items-center justify-center py-bigger" :class="mode">
        <div class="notification-container relative">
            <div class="notification-title py-big text-center text-big font-bold">{{title}}</div>
            <div class="notification-text text-block py-big">{{text}}</div>
            <div v-if="closeCallback || successCallback" class="notification-buttons flex pt-bigger">
                <button v-if="closeCallback" @click="close('closeCallback', $event)" class="notification-button-close button button-danger w-full">{{$t('labels.Cancel')}}</button>
                <button v-if="successCallback" @click="close('successCallback', $event)" class="notification-button-confirm button w-full">{{$t('labels.OK')}}</button>
            </div>
            <button @click.self="close('closeCallback', $event)" class="notification-close-button absolute flex items-center justify-center">&times;</button>
        </div>
    </div>
</template>

<script>
    import popup from '@/mixins/popup';
    import eventBus from '@/utilities/eventBus';

    export default {
        name: 'Notification',
        mixins: [popup],
        data: function () {
            return {
                display: false,
                title: '',
                text: '',
                mode: '',
                closeCallback: undefined,
                successCallback: undefined
            };
        },
        methods: {
            close(callback, event) {
                const component = this;

                document.querySelectorAll('.notification-buttons .button').forEach((button) => {
                    button.disabled = true;
                });

                Promise.resolve(component[callback]()).finally(() => {
                    document.querySelectorAll('.notification-buttons .button').forEach((button) => {
                        button.disabled = false;
                    });
                    component.toggle();
                });
            }
        },
        created() {
            const component = this;

            eventBus.$on('notify', function (options) {
                component.display = true;
                component.title = options.title;
                component.text = options.text;
                component.mode = options.mode;
                component.closeCallback = options.closeCallback;
                component.successCallback = options.successCallback;
            });
        }
    };
</script>

<style scoped>
    .notification {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.85);
    }

    .notification .notification-title {
        border-bottom: 1px solid;
        color: inherit;
    }

    .notification-container {
        width: 400px;
        max-width: 90%;
        padding: 8px 16px 16px;
        border: 1px solid var(--default-text-color-darker);
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    }

    .notification-text {
        border-bottom: 1px solid;
    }

    .notification-buttons .button {
        margin-right: 5%;
    }

    .notification-buttons .button:last-child {
        margin-right: 0;
    }

    .notification.error {
        color: var(--default-warning-color);
    }

    .notification.error .notification-container {
        border-color: var(--default-warning-color);
        box-shadow: 0 0 10px 0 var(--default-warning-color);
    }

    .notification.error .notification-title {
        border-bottom-color: var(--default-warning-color);
    }

    .notification.error .notification-text {
        border-bottom-color: var(--default-warning-color);
    }

    .notification-close-button {
        top: 5px;
        right: 5px;
        width: 24px;
        height: 24px;
        font-size: var(--font-size-biggest);
        font-weight: bold;
        color: #000;
        background-color: #fff;
        cursor: pointer;
    }
</style>
