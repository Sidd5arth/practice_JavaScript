// Given the roots of two binary trees p and q, write a
// function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical,
// and the nodes have the same value.

function checkSame(t1, t2) {
  const stack = [];
  stack.push(t1);
  stack.push(t2);

  while (stack.length > 0) {
    const node1 = stack.pop();
    const node2 = stack.pop();

    if (!node1 && !node2) continue;
    if (node1.val !== node2.val || !node1 || !node2) return false;
  }
  return true;
}
const tree1 = [1, 2, 3];
const tree2 = [1, 2, 3];
console.log(checkSame(tree1, tree2));

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }
