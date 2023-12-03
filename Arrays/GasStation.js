var canCompleteCircuit = function(gas, cost) {
    let totalFuel = 0;
    let totalCost = 0;
    let currFuel = 0
    let index = 0;

    for(let i = 0; i < gas.length; i++){
        totalFuel += gas[i]; 
        totalCost += cost[i]; 
        currFuel += gas[i] - cost[i];
        if(currFuel < 0){
            index = i + 1;
            currFuel = 0;
        }
    }
    if(totalFuel >= totalCost) return index;
    else return -1;
}
console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]))