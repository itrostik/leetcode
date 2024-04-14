function sumOfLeftLeaves(root: TreeNode | null): number {
  function sum(root: TreeNode | null, b: "left" | "right" = "right"): number {
    if (!root) return 0;
    if (!root.left && !root.right) {
      if (b === "left") return root.val;
      return 0;
    }
    return sum(root.left, "left") + sum(root.right, "right");
  }

  return sum(root);
}
