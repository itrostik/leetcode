function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let len = 0;
  let node = head;
  let prev = new ListNode(null, node);
  let count = 0;

  while (node) {
    len++;
    node = node.next;
  }

  len = len - n;
  node = head;

  while (node) {
    if (len === 0) {
      head = head.next;
      break;
    }
    if (count === len) {
      prev.next = node.next;
    }
    prev = node;
    node = node.next;
    count++;
  }
  return head;
}
