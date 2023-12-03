// Given a nested json a tree like structure return an array containg all the name in the json (DFS)

// function extractNames(tree) {
//     let arr = [];

//     function getNames(node) {
//         if(node.name){
//             arr.push(node.name)
//         }
//         if(node.subitems && Array.isArray(node.subitems)){
//             node.subitems.forEach(getNames);
//         }
        
//     }

//     tree.forEach(getNames);
//     return arr;
// }















function extractNames(arr) {
    let ans = [];

    function searchName(node) {
        if(node.name){
            ans.push(node.name);
        }
        if(node.subitems && Array.isArray(node.subitems)){
            let newArr = node.subitems;
            for(let j = 0; j < newArr.length; j++){
                searchName(newArr[j]);
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        searchName(arr[i]);
    }
    return ans;
}

const arr = [
    {
        "name": "Menu 1",
        "link": "abc.com",
        "subitems": [
            {
                "name": "Menu 2",
                "link": "def.com",
            }
        ]
    },
    {
        "name": "Menu 3",
        "link": "ghi.com",
        "subitems": [
            {
                "name": "Menu 4",
                "link": "jkl.com",
                "subitems": [
                    {
                        "name": "Menu 5",
                        "link": "mno.com",
                    },
                    {
                        "name": "Menu 6",
                        "link": "pqr.com",
                    }
                ]
            }
        ]

    }
];

const namesArray = extractNames(arr);
console.log(namesArray);

