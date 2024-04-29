import {ListNode} from "classes";

function sortList(head: ListNode | null): ListNode | null {

  if (!head) return head

  const arr = []
  let cur = head

  let length = 0

  while (cur) {
    length++
    arr.push(cur.val)
    cur = cur.next
  }


  arr.sort((a, b) => a - b)


  cur = new ListNode(arr[0], null)

  let dummy = cur

  let i = 1;

  while (i < length) {
    cur.next = new ListNode(arr[i], null)
    cur = cur.next
    i++
  }

  return dummy

};