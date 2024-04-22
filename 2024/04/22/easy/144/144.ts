import {TreeNode} from "classes";

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val]
  if (root.left && root.right) return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
  if (root.left) return [root.val, ...preorderTraversal(root.left)]
  if (root.right) return [root.val, ...preorderTraversal(root.right)]
};