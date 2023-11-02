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
  
  const List1 = new LinkedList();
  List1.append(1);
  List1.append(2);
  List1.append(3);
  List1.append(4);

  const List2 = new LinkedList();
  List2.append(4);
  List2.append(2);
  List2.append(9);
  List2.append(1);

//   List1.print()
//   List2.print()

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function getSum(l1, l2){
    const dummy = new LinkedList();
    let carry = 0;

    l1 = l1.head; 
    l2 = l2.head;

    while(l1 || l1 || carry){
        let sum = carry;
        if(l1){
            sum += l1.data;
            l1 = l1.next;
        }
        if(l2){
            sum += l2.data;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);

        dummy.append(sum % 10);
    }
    return dummy;
}

const result = getSum(List1, List2);
result.print();