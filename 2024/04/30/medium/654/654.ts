import {TreeNode} from "classes";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;
  let index = 0;
  let max = nums[index];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }

  const node = new TreeNode(max);
  node.left = constructMaximumBinaryTree(nums.slice(0, index));
  node.right = constructMaximumBinaryTree(nums.slice(index + 1));

  return node;
};