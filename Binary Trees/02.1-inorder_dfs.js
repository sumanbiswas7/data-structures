function inorder_dfs(node) {
  if (!node) return;

  inorder_dfs(node.left);
  console.log(node.val);
  inorder_dfs(node.right);
}

// inorder_dfs(tree.root);

function inorder_dfs_i(node) {
  if (!node) return stack;
  const stack = [];
  const res = [];

  let curr = node;
  while (true) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      if (stack.length == 0) break;
      curr = stack.pop();
      res.push(curr.val);
      curr = curr.right;
    }
  }
  console.log(res);
}

// inorder_dfs_i(tree.root);
