class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.head = null;
        this.tail = null;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const n = this.map.get(key);

        if (!n) {
            return -1;
        }

        this.moveToTail(n);

        return n.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let n = this.map.get(key);

        if (n) {
            n.value = value;
            this.moveToTail(n);
            return;
        }

        // Remove LRU entry if capacity is reached
        if (this.map.size >= this.capacity) {
            const lru = this.head;

            this.map.delete(lru.key);

            this.head = lru.next;

            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        }

        // Create new node
        n = new ListNode(key, value);
        this.map.set(key, n);

        // Empty cache
        if (!this.head) {
            this.head = n;
            this.tail = n;
            return;
        }

        // Add to MRU position
        this.tail.next = n;
        n.prev = this.tail;
        this.tail = n;
    }

    /**
     * Move a node to the MRU position
     */
    moveToTail(n) {
        if (n === this.tail) {
            return;
        }

        // Remove node from current position
        if (n.prev) {
            n.prev.next = n.next;
        } else {
            // n was the head
            this.head = n.next;
        }

        if (n.next) {
            n.next.prev = n.prev;
        }

        // Add node to the end
        n.prev = this.tail;
        n.next = null;

        this.tail.next = n;
        this.tail = n;
    }
}

class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}