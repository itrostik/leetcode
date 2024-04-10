function isSymmetric(root: TreeNode | null): boolean {
  function isEqual(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;
    return isEqual(node1.left, node2.right) && isEqual(node1.right, node2.left);
  }
  return isEqual(root.left, root.right);
}
