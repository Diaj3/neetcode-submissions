class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        /**
         * Store indices in decreasing order of their values.
         */
        const w = [];

        // Build the initial window
        for (let i = 0; i < k; i++) {
            // Remove values that can never become the maximum
            while (w.length && nums[w.at(-1)] < nums[i]) {
                w.pop();
            }
            w.push(i);
        }
        // Maximum of the first window
        const m = [nums[w[0]]]

        // Slide the window
        for (let i = k; i < nums.length; i++) {
            /**
             * Remove the index that is no longer inside
             * the current window.
             */
            if (w.length && w[0] <= i - k) {
                w.shift();
            }

            /**
             * Remove values smaller than the current value.
             * They can never become the maximum while the
             * current value is inside the window.
             */
            while (w.length && nums[w.at(-1)] < nums[i]) {
                w.pop();
            }

            // Add the current index
            w.push(i);

            // Front of the deque is the maximum
            m.push(nums[w[0]]);
        }
        return m;
    }
}
