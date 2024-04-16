function detectCycle(head: ListNode | null): ListNode | null {
  if (head == null) return null;

  let slow = head;
  let fast = head;
  let cycle = false;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) {
      cycle = true;
      slow = head;
      break;
    }
  }

  if (!cycle) return null;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
