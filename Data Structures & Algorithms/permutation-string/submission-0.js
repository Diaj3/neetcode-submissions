class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const h = new Map();
        const s1Len = s1.length;
    
        // Map all values of s1
        for (let i = 0; i < s1Len; i++) {
            const count = (h.get(s1[i]) ?? 0) + 1;
            h.set(s1[i], count);
        }

        // Setup window left pointer
        let l = 0;
        // Keep track of current window matches
        let matches = 0;
        // Second map to keep track of window frequencies
        const h2 = new Map();

        for (let i = 0; i < s2.length; i++) {
            // Check if adding this character creates or breaks a match
            if (h.has(s2[i]) && h.get(s2[i]) === (h2.get(s2[i]) ?? 0) + 1) {
                matches++;
            }
            if (h.has(s2[i]) && h.get(s2[i]) === (h2.get(s2[i]) ?? 0)) {
                matches--;
            }
            // Add current character to the window
            h2.set(s2[i], (h2.get(s2[i]) ?? 0) + 1);
            
            if (i - l + 1 > s1Len) {
                // Check if removing this character creates or breaks a match
                if (h.has(s2[l]) && h.get(s2[l]) === h2.get(s2[l]) - 1) {
                    matches++;
                }
                if (h.has(s2[l]) && h.get(s2[l]) === h2.get(s2[l])) {
                    matches--;
                }
                // Remove leftmost character from the window
                h2.set(s2[l], h2.get(s2[l]) - 1);
                l++;
            }

            // All required character frequencies match
            if (matches === h.size) {
                return true;
            }
        }
        // No permutation was found
        return false;
    }
}
