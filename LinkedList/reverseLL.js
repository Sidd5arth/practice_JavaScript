class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  print() {
    let current = this.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
  }
}

const List = new LinkedList();
List.append(1);
List.append(2);
List.append(3);
List.append(4);



// reversing the linked list itrative
// var reverseList = function(head) {
//     let prev = null;
//     let curr = head;

//     while(curr !== null){
//         head = head.next;
//         curr.next = prev;
//         prev = curr;
//         curr = head;
//     }
//     return prev;
// };

// reversing the linked list recursive
var reverseList = function(head) {
  if(head === null || head.next === null) return head;

  let rev = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return rev;
};

List.head = reverseList(List.head);
List.print();
