import {TreeNode} from "classes";

function flattens(root: TreeNode | null): void {

  const stack = []

  function dfs(node: TreeNode | null) {
    if (!node) return;
    if (node.left) {
      if (node.right) stack.push(node.right)
      node.right = node.left
      node.left = null
      dfs(node.right)
    } else if (node.right) dfs(node.right)

    if (!node.left && !node.right && stack.length > 0) {
      node.right = stack.pop()
      dfs(node.right)
    }
  }

  dfs(root)
}