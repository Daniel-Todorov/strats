import eventBus from '@/utilities/eventBus';

export default {
    methods: {
        /***
         * mode, title, text, successCallback, closeCallback
         * @param options
         */
        notify(options) {
            eventBus.$emit('notify', options);
        }
    }
};