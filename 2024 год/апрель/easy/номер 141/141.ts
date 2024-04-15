function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (slow && fast) {
    if (!fast.next || !slow.next) break;
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
