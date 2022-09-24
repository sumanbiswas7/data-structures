def levelOrder(root):
  q, res = deque(), []
  
  if not root: return res
  q.append(root)
  
  while q:
      level = []
      
      for i in range(len(q)):
          curr = q.popleft()
          level.append(curr.val)
          
          if curr.left: q.append(curr.left)
          if curr.right: q.append(curr.right)
      
      res.append(level)
      
  return res