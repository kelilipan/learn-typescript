import { LinkedList, ListNode } from "./linked-list";

const list = new LinkedList();

list.append(new ListNode(1));
list.prepend(new ListNode(2));
list.append(new ListNode(3));
list.insert(new ListNode(66), 1);

list.print();

// console.log("Delete last element");
// list.pop();
// list.print();

// console.log("Delete first element");
// list.pop(0);
// list.print();

// console.log("Delete 2nd element");
// list.pop(1);
// list.print();

// console.log("Delete last element");
// list.pop(3);
// list.print();

// console.log("Delete last element");
// list.pop(-1);
// list.print();
