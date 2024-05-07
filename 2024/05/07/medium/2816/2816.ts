import {ListNode} from "classes";

function doubleIt(head: ListNode | null): ListNode | null {
  let num = []
  let cur = head
  while (cur) {
    num.push(cur.val)
    cur = cur.next
  }

  num = String(BigInt(num.join(""))*BigInt(2)).split("")

  cur = head
  let i = 0
  while (cur) {
    cur.val = +num[i]
    i++
    if (cur.next) cur = cur.next
    else break;
  }

  while (i < num.length) {
    cur.next = new ListNode(+num[i], null)
    i++
    cur = cur.next
  }

  return head

};