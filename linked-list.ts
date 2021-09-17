class ListNode {
  public data: number | string;
  public next: ListNode | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

class LinkedList {
  public head: ListNode | null = null;
  public tail: ListNode | null = null;
  public length: number = 0;

  /**
   * Insert node to last index
   */
  append(node: ListNode) {
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  /**
   * Insert node to first index
   * @param {ListNode} node - Node
   */
  prepend(node: ListNode) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /**
   * Insert node to given index
   * @param {ListNode} node - Node
   * @param {number} index - Given index
   */
  insert(node: ListNode, index: number) {
    if (index >= this.length || index < 1) {
      return;
    }

    let pointer = this.head;
    for (let i = 1; i < index; i++) {
      pointer = pointer!.next;
    }

    node.next = pointer!.next;
    pointer!.next = node;
    this.length++;
  }

  /**
   * Delete last element or given index from list from list
   * @param {number} index (optional) - Given index
   */
  pop(index: number = -1) {
    if (this.tail === null || index >= this.length || this.length < -1) {
      return;
    }

    //if only one element
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    //if index is head node
    else if (index === 0) {
      this.head = this.head!.next;
    }

    //if the index is in the middle
    else if (index && index < this.length - 1 && index !== -1) {
      // find node before pointer
      let pointer = this.head;
      for (let i = 1; i < index; i++) {
        pointer = pointer!.next;
      }

      let selectedNode = pointer!.next;
      pointer!.next = selectedNode!.next;
      selectedNode!.next = null;
    }

    //delete last index
    else {
      //find node before tail
      let pointer = this.head;
      while (pointer!.next !== this.tail) {
        pointer = pointer!.next;
      }

      // replace tail with node before tail
      this.tail = pointer;
      pointer!.next = null;
    }

    this.length--;
  }

  /**
   * Print all element
   */
  print() {
    let pointer = this.head;
    let outputString = "";

    while (pointer !== null) {
      outputString += pointer.data + " -> ";
      pointer = pointer.next;
    }

    console.log(`head\t= ${this.head?.data}`);
    console.log(`tail\t= ${this.tail?.data}`);
    console.log(`length\t= ${this.length}`);
    console.log(`data\t= ${outputString}NULL`);
  }
}

export { ListNode, LinkedList };
