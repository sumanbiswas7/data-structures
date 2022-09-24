function postorder_dfs(node) {
  if (!node) return;

  postorder_dfs(node.left);
  postorder_dfs(node.right);
  console.log(node.val);
}

// postorder_dfs(tree.root);

function postorder_dfs_i(root) {
  if (!root) return [];
  const s1 = [root],
    s2 = [],
    res = [];

  let curr = root;
  while (s1.length > 0) {
    curr = s1.pop();
    s2.push(curr);

    if (curr.left) s1.push(curr.left);
    if (curr.right) s1.push(curr.right);
  }

  while (s2.length > 0) {
    const node = s2.pop();
    res.push(node.val);
  }

  return res;
}

// postorder_dfs_i(tree.root);
