class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // If either list is empty, return the other
        if (!list1) return list2;
        if (!list2) return list1;

        // New node lets us build the result from the beginning
        const n = new ListNode();
        let prev = n;

        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                prev.next = list1;
                list1 = list1.next;
            } else {
                prev.next = list2;
                list2 = list2.next;
            }
            prev = prev.next;
        }

        // One list may still have nodes remaining
        if (list1 !== null) {
            prev.next = list1;
        } else {
            prev.next = list2;
        }
        return n.next;
    }
}