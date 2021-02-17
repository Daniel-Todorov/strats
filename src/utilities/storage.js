export default {
    getItem(key){
        let item;

        try {
            item = JSON.parse(window.localStorage.getItem(key))
        } catch (e) {
            console.error(e.message);
        }

        return item;
    },
    setItem(key, value){
        try {
            window.localStorage.setItem(key, JSON.stringify(value));

            return true;
        } catch (e) {
            console.error(e.message);

            return false;
        }
    },
    removeItem(key) {
        try {
            window.localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.log(e.message);

            return false;
        }
    }
}
