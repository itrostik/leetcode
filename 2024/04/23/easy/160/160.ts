import {ListNode} from "classes";

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let curA = headA
  let curB = headB

  const map = new Map()

  while (curA) {
    map.set(curA, true)
    curA = curA.next
  }

  while (curB) {
    if (map.has(curB)) return curB
    curB = curB.next
  }

  return null
};