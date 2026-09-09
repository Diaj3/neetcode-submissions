class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const h = new Map();
        
        // Left pointer
        let l = 0;
        // Longest valid window found
        let res = 0;
        // Highest character frequency seen while expanding the window
        let maxFreq = 0;

        for (let i = 0; i < s.length; i++) {
            // Add the current character to the window
            const count = (h.get(s[i]) ?? 0) + 1;
            h.set(s[i], count);

            // Track the most frequent character in the window
            maxFreq = Math.max(maxFreq, count);

            // Current window size
            let w = i - l + 1;

            /**
             * Characters other than the most frequent one
             * would need to be replaced to make the window
             * consist of a single repeated character.
             */
            while (w - maxFreq > k) {
                // Remove the leftmost character from the window
                h.set(s[l], h.get(s[l]) - 1);
                l++;

                // Recalculate the window size after moving l
                w = i - l + 1;
            }

            // maxFreq does not need to decrease when shrinking.
            // It is only used as an upper bound, which is sufficient.
            res = Math.max(res, w);
        }

        return res;
    }
}