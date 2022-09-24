function preorder_dfs(node) {
  if (!node) return;

  console.log(node.val);
  preorder_dfs(node.left);
  preorder_dfs(node.right);
}

// preorder_dfs(tree.root);

function preorder_dfs_i(node) {
  const stack = [node];
  if (!node) return stack;

  while (stack.length > 0) {
    for (let i = 0; i < stack.length; i++) {
      const curr = stack.pop();
      console.log(curr.val);
      if (curr.right) stack.push(curr.right);
      if (curr.left) stack.push(curr.left);
    }
  }
}

// preorder_dfs_i(tree.root);
