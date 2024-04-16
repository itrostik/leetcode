import {TreeNode} from "classes";

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
