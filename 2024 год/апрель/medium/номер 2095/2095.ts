function deleteMiddle(head: ListNode | null): ListNode | null {
  const result = new ListNode(null, head);
  let curr = head;
  let length = 0;

  while (curr !== null) {
    curr = curr.next;
    length++;
  }

  const mid = Math.floor(length / 2);
  length = 0;
  let prev = result;
  curr = head;
  while (curr !== null) {
    if (length === mid) {
      prev.next = curr.next;
      break;
    }
    const next = curr.next;
    prev = curr;
    curr = next;
    length++;
  }

  return result.next;
}
