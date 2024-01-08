function LinkedList() {
     this.head = null;
}

LinkedList.prototype.add = function (val) {
     let node = {
          value: val,
          next: null
     }
     if (!this.head) {
          this.head = node;
     }
     else {
          let currentNode = this.head;
          while (currentNode.next) {
               currentNode = currentNode.next;
          }
          currentNode.next = node;
     }
}


var sll = new LinkedList();

sll.add(2);
sll.add(3);
sll.add(4);
sll.add(10);
sll.add(13);

// reverse single linked list 
function reverseSLL(sll) {

     if (!sll.head || !sll.head.next) return sll;

     let nodes = []
     let current = sll.head;
     while (current) {
          nodes.push(current);
          current = current.next;
     }

     let reversedLL = new LinkedList();

     reversedLL.head = nodes.pop();
     current = reversedLL.head;

     let node = nodes.pop();
     while (node) {
          node.next = null;
          current.next = node;

          current = current.next;
          node = nodes.pop();
     }
     return reversedLL;
}

console.log("reverse singly linked list: ", reverseSLL(sll));
//---------------------------------------------------

// kth element from end in linked list
function kthFromEnd(sll, k) {
     let node = sll.head;
     let i = 1;
     let kthNode;

     if (k <= 0) return;

     while (node) {
          if (i == k) kthNode = sll.head;
          else if (i - k > 0) {
               kthNode = kthNode.next;
          }
          i++;

          node = node.next;
     }
     return kthNode;
}

console.log(kthFromEnd(sll, 1));
// -------------------------------------

// rotateByKthNode in linked list
function rotateByKthNode(sll, k) {
     let prevHead = sll.head;
     let previous = sll.head;
     let current = sll.head;
     let i = 1;
     while (current.next) {
          if (i == k + 1) {
               sll.head = current;
               previous.next = null;
          }
          previous = current;
          current = current.next;
          i++;
     }
     current.next = prevHead;
     return sll;
}

console.log(rotateByKthNode(sll, 1))