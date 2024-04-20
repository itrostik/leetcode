import {ListNode} from "classes";

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(null, head)
  let cur = head.next
  let prev = dummy.next

  function findGCD(n1: number, n2: number): number {
    if (n1 === 0 || n2 === 0) return n1 + n2
    if (n1 > n2) return findGCD(n1 % n2, n2)
    else return findGCD(n1, n2 % n1)
  }

  while (cur) {
    const value = findGCD(prev.val, cur.val)
    const node = new ListNode(value, cur)
    prev.next = node
    prev = cur
    cur = cur.next
  }

  return dummy.next

};