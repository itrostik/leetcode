import {ListNode} from "classes";

function isPalindrome(head: ListNode | null): boolean {
  let stack = []
  let last = head
  while (last) {
    stack.push(last.val)
    last = last.next
  }
  for (let i = 0; i < stack.length / 2; i++) {
    if (stack[i] !== stack[stack.length - 1 - i]) return false
  }
  return true
}