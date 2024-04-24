import {ListNode, TreeNode} from "classes";


function sortedListToBST(head: ListNode | null): TreeNode | null {

  if (!head) return null;

  let values = []

  let cur = head

  while (cur) {
    values.push(cur.val)
    cur = cur.next
  }

  function binarySearch(values: number[]): TreeNode {
    if (!values || values.length < 1) return null
    if (values.length === 1) return new TreeNode(values[0])
    const middle = Math.floor(values.length / 2)
    return new TreeNode(values[middle], binarySearch(values.slice(0, middle)), binarySearch(values.slice(middle + 1, values.length)))
  }

  return binarySearch(values)
};