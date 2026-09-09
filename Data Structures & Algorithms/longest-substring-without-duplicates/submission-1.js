class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const h = new Map();

        // Left boundary of the current window
        let k = 0;
        let len = 0;

        for (let i = 0; i < s.length; i++) {
            let v = h.get(s[i]);
            /**
             * If we found the character inside the current window,
             * move k to the position after its previous occurrence.
             *
             * If v is before k, that occurrence is outside the
             * current window, so k does not need to move backwards.
             */
            if (v !== undefined && v >= k) {
                k = v + 1;
            }
            // Update the character's last occurrence
            h.set(s[i], i);
            
            /**
             * Both k and i are inclusive boundaries, so the
             * window length is the distance between them + 1.
             */
            len = Math.max(len, i - k + 1);
        }
        return len;
    }
}