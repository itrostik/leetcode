function maxDepth(root: TreeNode | null): number {
  let maxDepth = 0;
  let currentDepth = 0;
  if (!root) return maxDepth;

  function graph(node: TreeNode | null) {
    if (!node) return;
    else currentDepth++;
    if (!node.left && !node.right) {
      if (maxDepth <= currentDepth) maxDepth = currentDepth;
      currentDepth--;
      return;
    } else if (node.left && !node.right) {
      graph(node.left);
      currentDepth--;
    } else if (!node.left && node.right) {
      graph(node.right);
      currentDepth--;
    } else {
      graph(node.left);
      graph(node.right);
      currentDepth--;
    }
  }

  graph(root);
  return maxDepth;
}
