import {TreeNode} from "classes";

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {

  if (depth === 1) {
    return new TreeNode(val, root, null)
  }


  let curDepth = 1

  function bfs(node: TreeNode | null) {
    curDepth++
    if (!node) {
      curDepth--
      return
    }
    if (curDepth === depth) {
      console.log(node.val)
      const left = new TreeNode(val, node.left, null)
      const right = new TreeNode(val, null, node.right)
      node.left = left
      node.right = right
    }
    bfs(node.left)
    bfs(node.right)
    curDepth--
  }

  bfs(root)
  return root
}