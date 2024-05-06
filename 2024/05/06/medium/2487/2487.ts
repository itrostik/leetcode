import {ListNode} from "classes";

function removeNodes(head: ListNode | null): ListNode | null {
  let stack = [];
  let current = head;

  while (current !== null) {
    while (stack.length > 0 && stack[stack.length - 1].val < current.val) {
      stack.pop();
    }
    stack.push(current);
    current = current.next;
  }

  let dummy = new ListNode(0);
  let prev = dummy;
  for (let node of stack) {
    prev.next = node;
    prev = node;
  }
  prev.next = null;

  return dummy.next;
};