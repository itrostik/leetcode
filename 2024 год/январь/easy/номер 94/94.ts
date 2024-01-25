class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

//рекурсия
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
