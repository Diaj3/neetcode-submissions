class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let s = nums[0];
        let f = nums[0];

        /** 
         * Find where the pointers meet
         * for the first time
         * 
         * "Floyd's Tortoise"
         */
        while (true) {
            s = nums[s];
            f = nums[nums[f]];
            
            if (s === f) {
                break;
            }
        }

        /**
         * Find entrance of the cicle
         * This will be our duplicate number
         */
        s = nums[0];
        while (s !== f) {
            s = nums[s];
            f = nums[f];
        }

        return s;
    }
}
