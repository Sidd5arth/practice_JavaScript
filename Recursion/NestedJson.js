// Given a nested json a tree like structure return an array containg all the name in the json

function extractNames(tree) {
    let arr = [];

    function getNames(node) {
        if(node.name){
            arr.push(node.name)
        }
        if(node.subitems && Array.isArray(node.subitems)){
            node.subitems.forEach(getNames);
        }
        
    }

    tree.forEach(getNames);
    return arr;
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

