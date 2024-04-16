/**
 * Definition for singly-linked list.
 * class Index {
 *     val: number
 *     next: Index | null
 *     constructor(val?: number, next?: Index | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let dummy = new ListNode(null);
  dummy.next = head;
  let prev = dummy;
  let cur = head;
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next;
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  return dummy.next;
}
