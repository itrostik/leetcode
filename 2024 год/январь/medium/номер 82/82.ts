function deleteDuplicates(head: ListNode | null): ListNode | null {
  let linkToHead = new ListNode(null, head)
  let prev = linkToHead
  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next
      }
      prev.next = head.next
    } else {
      prev = head
    }
    head = head.next
  }
  return linkToHead.next
}