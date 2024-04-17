import {TreeNode} from "classes";

function smallestFromLeaf(root: TreeNode | null): string {

  let res: string = '{';

  const traverse = (node: TreeNode | null, path: string) => {
    if (!node) return;
    const newPath = String.fromCharCode(node.val + 97) + path;
    if (!node.left && !node.right && res > newPath) res = newPath;
    traverse(node.left, newPath);
    traverse(node.right, newPath);
  };

  traverse(root, '');
  return res;
}