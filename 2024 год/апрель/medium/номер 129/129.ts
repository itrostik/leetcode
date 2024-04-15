function sumNumbers(root: TreeNode | null): number {
  let curString = "";
  let sum = 0;

  function dfs(node: TreeNode | null) {
    curString += node.val.toString();
    if (!node.left && !node.right) {
      sum += +curString;
      curString = curString.slice(0, curString.length - 1);
      return;
    }

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    curString = curString.slice(0, curString.length - 1);
  }

  dfs(root);

  return sum;
}
