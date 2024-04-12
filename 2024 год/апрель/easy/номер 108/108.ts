class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length <= 0) return null;

  let start = 0;
  let end = nums.length - 1;

  const middle = Math.floor((start + end) / 2);

  return new TreeNode(
    nums[middle],
    sortedArrayToBST(nums.slice(0, middle)),
    sortedArrayToBST(nums.slice(middle + 1, end + 1)),
  );
}
