class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const h = new Map();
        
        // Points to previous same match occurence
        let k = 0;

        // Lenght of the longest substring;
        let len = 0;

        for(let i=0;i<s.length;i++) {
            let v = h.get(s[i]);
            /**
             * We want k to go to the value after 
             * the matching one, if v is smaller than
             * k, we don't do anything with k given that
             * k cannot go backwards
             */
            if (v !== undefined && v >= k) {
                k = v + 1;
            }
            h.set(s[i], i);
            /**
             * Calculate length, we add the +1
             * because i-k just calculates the
             * distance between the pointers
             * and excludes the pointer itself
             */
            len = Math.max(len, i-k+1);
        }
        return len;
    }
}
