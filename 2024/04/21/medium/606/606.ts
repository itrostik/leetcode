import {TreeNode} from "classes";

function tree2str(root: TreeNode | null): string {
  function bfs(node: TreeNode | null) {
    if (!node) return "";
    if (!node.left && !node.right) return node.val.toString()
    if (!node.left && node.right) return node.val.toString() + "()" + "(" + bfs(node.right) + ")"
    if (node.left && !node.right) return node.val.toString() + "(" + bfs(node.left) + ")"
    return node.val.toString() + "(" + bfs(node.left) + ")" + "(" + bfs(node.right) + ")"

  }

  return bfs(root)
}