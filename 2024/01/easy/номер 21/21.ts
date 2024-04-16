function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 && !list2) return list1
  let result = new ListNode(null, null)
  let linkToResult = new ListNode(null, result)
  while (list1 || list2) {
    if (list1 && list2) {
      if (list1.val < list2.val) {
        result.val = list1.val
        list1 = list1.next
      } else {
        result.val = list2.val
        list2 = list2.next
      }
    }
    else if (list1) {
      result.val = list1.val
      if (!list1.next) break
      list1 = list1.next

    } else {
      result.val = list2.val
      if (!list2.next) break
      list2 = list2.next
    }
    result.next = new ListNode(null, null)
    result = result.next
  }
  return linkToResult.next
}