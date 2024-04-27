import {ListNode} from "classes";

function rotateRight(head: ListNode | null, k: number): ListNode | null {

  if (!head || !head.next) return head

  let length = 0
  let count = 0;
  let cur = head

  while (cur) {
    length++
    cur = cur.next
  }

  while (count < k % length) {
    let prevHead = head
    let prev = new ListNode(null, head)
    let cur = head
    while (cur) {
      if (!cur.next) {
        prev.next = null
        cur.next = prevHead
        head = cur
        break;
      }
      prev = cur
      cur = cur.next
    }
    count++
  }

  return head
};