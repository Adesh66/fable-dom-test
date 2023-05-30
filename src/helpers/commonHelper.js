export const createNestedObject = (arr) => {
    const root = { name: arr[0], children: [] };
    let currentNode = root;
    let currentChildIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      const newNode = { name: arr[i], children: [] };
      currentNode.children[currentChildIndex] = newNode;
  
      if (currentChildIndex === 1) {
        currentNode = currentNode.children[currentChildIndex];
        currentChildIndex = 0;
      } else {
        currentChildIndex++;
      }
    }
  
    return root;
  };
