function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  let curr = 0;
  let result = false;
  function dfs(root: TreeNode | null) {
    if (result) return;
    if (!root) return;
    curr += root.val;
    if (Math.abs(curr) > Math.abs(targetSum) && !root.left && !root.right) {
      curr -= root.val;
      return;
    }

    if (curr === targetSum && !root.left && !root.right) {
      result = true;
      return;
    }
    dfs(root.left);
    dfs(root.right);
    curr -= root.val;
  }
  dfs(root);
  return result;
}
