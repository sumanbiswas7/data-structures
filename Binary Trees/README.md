### Binary Search Trees

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20fafd73-73b3-4a08-a703-529f7021c870/Untitled.png)

A binary search tree follows some order to arrange the elements. In a Binary search tree, the value of left node must be smaller than the parent node, and the value of right node must be greater than the parent node. This rule is applied recursively to the left and right subtrees of the root.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ea748852-3f54-4070-b27a-184c346d6e5e/Untitled.png)

**lookup : O(logN)**

**insert : O(logN)**

**delete: O(logN)**

**Caveats**

- To perform search optimally Binary Trees has to be balanced. Otherwise it could be an O(N) operation.
- _AVL Trees & Red Black Trees_
  _To auto-balance binary trees we could use AVL Trees or Red Black Trees. We’ll use some library to implement these but it’s necessary to know how it works._

[_https://www.cs.usfca.edu/~galles/visualization/AVLtree.html_](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)

[_https://www.cs.usfca.edu/~galles/visualization/RedBlack.html_](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
