// function BFS(graph, source){
//     let visited  = [];
//     let queue = [];

//     queue.push(source);

//     function traversal(){
//         if(queue.length === 0) return;
//         let node = queue.shift();
//         visited.push(node);
//         graph[node].forEach(neighbor => {
//             if(visited.includes(neighbor)) return;
//             else queue.push(neighbor);
//         });
//         traversal();
//     }
//     traversal();
//     return visited;
// }
function BFS(graph, source){
    let visited  = [];
    let queue = [];

    queue.push(source);

    while(queue.length !== 0){
        let node = queue.shift();
        visited.push(node);
        graph[node].forEach(neighbor => {
            if(visited.includes(neighbor)) return;
            else queue.push(neighbor);
        });
    }
    return visited;
}
function bfs(graph, source){

    // if(graph.left)
    
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

console.log(BFS(graph1, source1));