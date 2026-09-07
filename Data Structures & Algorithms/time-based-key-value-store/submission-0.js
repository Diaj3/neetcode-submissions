class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const currentVal = this.keyStore.get(key);
        if (!currentVal) {
            this.keyStore.set(key, [[timestamp, value]]);
            return;
        }
        currentVal.push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key);
        if (!arr) {
            return "";
        }

        let l = 0;
        let r = arr.length - 1;
        let i = -1;
        while(l<=r) {
            let p = Math.floor((r+l)/2);

            if (arr[p][0] === timestamp) {
                return arr[p][1]
            }

            if (arr[p][0] < timestamp) {
                /**
                 * Valid candidate, but there might be
                 * an even closer timestamp to the right.
                 */
                i = p;
                l = p + 1;
            } else {
                r = p - 1;
            }
        }
        if (i===-1) {
            return "";
        }
        return arr[i][1];
    }
}
