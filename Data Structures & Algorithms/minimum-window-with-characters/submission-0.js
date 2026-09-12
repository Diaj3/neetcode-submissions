class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const h = new Map();

        // Map all t values
        for (let i = 0; i < t.length; i++) {
            const v = h.get(t[i]) ?? 0;
            h.set(t[i], v + 1);
        }

        // Left pointer
        let l = 0;

        /**
         * Comparison map for the current window
         */
        let h2 = new Map();

        /**
         * How many required characters
         * currently have enough copies
         */
        let matches = 0;

        /**
         * Smallest possible string
         */
        let res = "";

        for (let i = 0; i < s.length; i++) {
            const v = h2.get(s[i]) ?? 0;

            if (h.has(s[i])) {
                h2.set(s[i], v + 1);

                if (v + 1 === h.get(s[i])) {
                    matches++;
                }
            }

            while (matches === h.size) {
                // Current window is valid, so check if it's the smallest
                const str = s.slice(l, i + 1);
                if (!res || str.length < res.length) {
                    res = str;
                }

                // If removing this character breaks a requirement
                if (h.has(s[l])) {
                    if (h.get(s[l]) === h2.get(s[l])) {
                        matches--;
                    }

                    h2.set(s[l], h2.get(s[l]) - 1);
                }
                // Shrink window
                l++;
            }
        }
        return res;
    }
}
