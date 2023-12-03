class heap {
    constructor(){
        this.arr = [];
    }

    pop(){
        [this.arr[0], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[0]];
        let top = this.arr.pop();

        let curr = 0;
        while(curr < this.arr.length){
            let leftIndex = 2*curr + 1;
            let rightIndex = 2*curr + 2;
            let maxIndex = rightIndex < this.arr.length && this.arr[rightIndex] > this.arr[leftIndex] ? rightIndex : leftIndex;

            if(this.arr[maxIndex] > this.arr[curr]){
                [this.arr[maxIndex], this.arr[curr]] = [this.arr[curr], this.arr[maxIndex]];
                curr = maxIndex;
            }else{
                break;
            }
        }
        return top;
    }
    push(val){
        this.arr.push(val);

        let curr = this.arr.length - 1;

        while(curr > 0){
            let parent = Math.floor((curr - 1) / 2);
            if(this.arr[curr] > this.arr[parent]){
                [this.arr[parent], this.arr[curr]] = [this.arr[curr], this.arr[parent]];
                curr = parent;
            }else{
                break;
            }
        }
    }
    print(){
        for(let i = 0; i < this.arr.length; i++){
            console.log(this.arr[i])
        }
    }

}


let mxhp = new heap();
mxhp.push(1);
mxhp.push(2);
mxhp.push(3);
mxhp.push(4);
mxhp.print();
console.log("topeel", mxhp.pop());
mxhp.print();


