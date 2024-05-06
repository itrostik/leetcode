import {TreeNode} from "classes";

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
  function dfs(node: TreeNode | null) {
    if (!node) return null;

    if (!node.left && !node.right) {
      if (node.val === target) return null
      return node
    }

    let leaf = new TreeNode(node.val, dfs(node.left), dfs(node.right))

    if (!leaf.left && !leaf.right) {
      if (leaf.val === target) leaf = null
      return leaf
    }
    return leaf
  }
  return dfs(root)
};