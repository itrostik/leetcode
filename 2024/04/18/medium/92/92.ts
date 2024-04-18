import {ListNode} from "classes";

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {

  if (!head || left === right) {
    return head;
  }

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;


  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  let current = prev.next;

  let tail = current;


  for (let i = left; i <= right; i++) {
    let next = current.next;
    current.next = prev.next;
    prev.next = current;
    current = next;
  }


  tail.next = current;

  return dummy.next;
};