import {ListNode} from "classes";

function deleteNode(node: ListNode | null): void {
  let next = node.next
  node.val = next.val
  node.next = next.next
}