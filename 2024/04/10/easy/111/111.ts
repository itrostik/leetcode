function minDepth(root: TreeNode | null): number {
  let minDepth = Infinity;
  let currentDepth = 0;
  if (!root) return 0;
  function graph(node: TreeNode | null) {
    if (!node) return;
    else currentDepth++;
    if (!node.left && !node.right) {
      if (minDepth >= currentDepth) minDepth = currentDepth;
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
  return minDepth;
}
