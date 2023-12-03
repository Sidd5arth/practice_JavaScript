function DFS(graph, source) {
  if(Object.keys(graph).length === 0) return []
  const stack = [];
  const visited = [];

  stack.push(source);

  while(stack.length > 0){
    const node = stack.pop();
    visited.push(node);
    const neighbors = graph[node];

    for(let i = neighbors.length - 1; i >= 0; i--){
      const neighbor = neighbors[i];
      if(!visited.includes(neighbor)){
        stack.push(neighbor);
      }
    }
  }
  return visited;
}

const graph1 = {
    A: ['B', 'C', 'D'],
    B: ['E', 'F'],
    C: ['G', 'H'],
    D: ['I', 'J'],
    E: ['D'],
    F: [],
    G: [],
    H: [],
    I: [],
    J: [],
  };

const source1 = 'B';

console.log(DFS(graph1, source1));