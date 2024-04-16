class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function deleteDuplicates(head: ListNode | null): ListNode | null {
  let cur = head
  let prev = new ListNode(null, head)
  while (cur) {
    if (cur.val === prev.val) {
      prev.next = cur.next
    } else {
      prev = cur
    }
    cur = cur.next
  }
  return head
}