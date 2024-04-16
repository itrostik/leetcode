import {ListNode} from "classes";


function deleteDuplicates(head: ListNode | null): ListNode | null {
  let cur = head
  let prev = new ListNode(null, head)
  while (cur) {
    if (cur.val === prev.val) {
      prev.next = cur.next
    } else {
      prev = cur
    }
    cur = cur.next
  }
  return head
}