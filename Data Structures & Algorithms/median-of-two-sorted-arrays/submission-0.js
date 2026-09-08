class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // Always binary search on the smaller array
        if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }

        const m = nums1.length;
        const n = nums2.length;

        // Number of elements that should be on the left side
        const half = Math.floor((m + n + 1) / 2);

        let l = 0;
        let r = m;

        while (l <= r) {
            // Both partition positions
            const p1 = Math.floor((l + r) / 2);
            const p2 = half - p1;

            // Boundary values around the partitions
            const n1l = p1 === 0 ? -Infinity : nums1[p1 - 1];
            const n1r = p1 === m ? Infinity : nums1[p1];

            const n2l = p2 === 0 ? -Infinity : nums2[p2 - 1];
            const n2r = p2 === n ? Infinity : nums2[p2];

            // Correct partition
            if (n1l <= n2r && n2l <= n1r) {
                // Odd number of elements
                if ((m + n) % 2 === 1) {
                    return Math.max(n1l, n2l);
                }

                // Even number of elements
                return (Math.max(n1l, n2l) + Math.min(n1r, n2r)) / 2;
            }

            // nums1 partition is too far right
            if (n1l > n2r) {
                r = p1 - 1;
            } else {
                // nums1 partition is too far left
                l = p1 + 1;
            }
        }
    }
}