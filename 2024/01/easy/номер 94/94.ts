function inorderTraversal(root: TreeNode | null): number[] {
  const result = []

  function helper(node: TreeNode | null) {
    if (node) {
      helper(node.left)
      result.push(node.val)
      helper(node.right)
    }
  }

  helper(root)
  return result
}
