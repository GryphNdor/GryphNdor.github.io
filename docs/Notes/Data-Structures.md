---
id: data-structures
title: Data Structures
sidebar_position: 2
slug: /notes/data-structures
custom_edit_url: null
---


export const Highlight = ({children, color, fontColor}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: fontColor ? 'black' : 'white',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);


:::tip Heads Up
btw this is in java so [pass-by-value](https://stackoverflow.com/questions/40480/is-java-pass-by-reference-or-pass-by-value)
:::

## __Random Access Data Structures__
---

### **Arrays**
- Non-mutable size => increased speed
- <Highlight color="#FFD832" fontColor={ true }>Big O Notation</Highlight>
   <ul>
    <li> Searching O(n) </li>
    <li> Accessing O(1) </li>
    <li> Adding/Deleting O(n) </li>
  </ul>
- Data is stored directly next to each other in memory which allows for an O(1) access time
- Optimal usage on less memory machines
- 2 ways of declaration up front or with separate data allocation


```java
int[] numbers = {1,2,3,4,5};
            or
int[] numbers = new int[5];

numbers[0]
//1
```
*note*: Another valid way of writing `int[] numbers` could be `int numbers[]` in java
```java
int[][] numbers = {
                    {1,2,3,4,5},
                    {1,2,3,4,5}
                                };
            or
int[][] numbers = new int[5][5];

// numbers[row][col]
numbers[0][0]
//1

//row major order
for(int i = 0; i < numbers.length; i++){
  for(int j = 0; j < numbers[i].length; j++){
    System.out.println(numbers[i][j]);
  }
}
```
### **ArrayList**
- Classical version of an Array
- The bigger brother of an Array 💪
- Dynamic Sizing
- <Highlight color="#FFD832" fontColor={true}>Big O Notation</Highlight> *same as an array*
  <ul>
    <li> Searching O(n) </li>
    <li> Accessing O(1) </li>
    <li> Adding/Deleting O(n) </li>
  </ul>
- Common methods:
  - Add/Remove (self explanitory)
  - Get (call an index, return a value)
  - Clear (remove everything inside the ArrayList)
- **Everything in an ArrayList is an Object**
  - <Highlight color="#25c2a0">Autoboxing:</Highlight> Converts the primitive values such as <code>int</code>, <code>double</code>, and <code>float</code> to its class version ie <code>Integer</code>, <code>Double</code>, <code>Float</code> 
- Reason for being fast is because it uses an array of pointers to find/access data

```java
import java.util.ArrayList;

ArrayList<Integer> numbers = new ArrayList<>(5);
                             //optional param

numbers.add(0,5);
// numbers = {5, null, null, null, null}

numbers.add(3,6);
// numbers = {5, null, null, 6, null}

numbers.get(3)
//6

numbers.remove(0,5);
// numbers = {null, null, null, 6, null}

numbers.contains(6);
//true

numbers.clear();
// numbers = {null, null, null, null, null}
```

## __Sequential Access Data Structures__
---
### **Stack**
- Think pancake stack 🥞
- <Highlight color="#25c2a0">First In Last Out</Highlight> (FILO) principle
- Access point at the top of the stack
- <Highlight color='#FFD832' fontColor={ true }>Big O Notation</Highlight> 
  <ul>
    <li>Seaching: O(n)</li>
    <li>Accessing: O(n)</li>
    <li>Adding/Deleting: O(1)</li>
  </ul>
- Common Methods:
  - Push (adds an element to the top of the stack)
  - Pop (removes the top element of the stack)
  - Peek (returns the element at the top of the stack w/o popping it off)
  - Search/Contains (looks through the stack and returns element passed in if it finds it)
  
```java
import java.util.Stack;

Stack<Integer> numbers = new Stack<>();

numbers.push(0);
//numbers = {0}

numbers.push(1);
//numbers = {0,1}

numbers.peek();
//1

numbers.pop();
//numbers = {0}

numbers.contains(7);
//false

```

---
### **Queue**
- The opposite of a stack (think waiting line)
- <Highlight color="#25c2a0">First In First Out</Highlight> (FIFO) principle
- Access point at the front of the queue
- <Highlight color='#FFD832' fontColor={ true }>Big O Notation</Highlight> *same O(n) as a Stack*
  <ul>
    <li> Searching O(n) </li>
    <li> Accessing O(n) </li>
    <li> Adding/Deleting O(1) </li>
  </ul>
- Similar Methods as a Stack
  - Enqueue (places an element at the beginning of the queue)
  - Dequeue (removes the first element of the queue)
  - Peek (looks at the first element of the queue w/o dequeuing it)
  - Search/Contains (looks through the queue and returns element passed in if it finds it)
```java
import java.util.Queue; //this is an interface
import java.util.LinkedList; //we will get to this next

Queue<Integer> numbers = new LinkedList<>();

numbers.enqueue(5)
//numbers= {5}

numbers.enqueue(4)
//numbers= {5,4}

numbers.dequeue()
//numbers= {4}

numbers.peek()
//4

numbers.contains(4)
//true
```
---
### **Linked List**
- A series of Nodes
- A Node contains ```data and a pointer to the next Node```
- <Highlight color="#25c2a0">Head Node:</Highlight> The first node in the Linked List
- <Highlight color="#00B4AB">Tail Node:</Highlight> The last node in the Linked List, points to null
- Flow of data is one way
- Access point at head of Linked List
- Can add Nodes to any point in the Linked List
- <Highlight color='#FFD832' fontColor={ true }>Big O Notation</Highlight> 
   <ul>
    <li> Searching O(n) </li>
    <li> Accessing O(n) </li>
    <li> Adding/Deleting O(n) || O(1) 
      <ul>
        <li>Inserting at the beginning is O(1)</li>
        <li>Inserting at in the middle is O(n)</li>
      </ul>
    </li>
  </ul>
 
```java
//there is a java class that does this but it serves more as a backing for the queue and stack

class Node{
  public int data;
  public Node next;
  constructor(int data, Node next){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  Node head = new Node(5, null);
  Node tail = new Node(7,null);
  
  head.next = tail;

  //note for these methods if position > linkedlist.size() then it will remove/add to tail
  public Node add(Node head, Node newNode, int position){
    if(position == 0){
      newNode.next = head;
      return newNode;
    }

    Node current = head;

    for(int i = 0; i < position - 1; i++){
      if(current.next == null){
        break;
      }
      else{
        current = current.next;
      }
    }
    newNode.next = current.next;
    current.next = newNode;
    return head;
  }

  public Node remove(Node head, int position){
    if(position == 0){
      Node current = head.next;
      head.next = null;
      return current;
    }
    Node current = head;

    for(int i = 0; i < position; i++){
      if(current.next.next == null){
        break;
      }
      else{
        current = current.next;
      }
    }
    current.next = current.next.next;
    return head;
  }

}
```
---
### **Doubly Linked List**
- Like a linked list but with an additional pointer pointing to the previous element
  
- Allows for two way flow of data between points
- <Highlight color='#FFD832' fontColor={ true }>Big O Notation</Highlight> 
  <ul>
    <li> Searching O(n) </li>
    <li> Accessing O(n) </li>
    <li> Adding/Deleting O(n) || O(1) 
      <ul>
        <li>Inserting at the beginning is O(1)</li>
        <li>Inserting at in the middle is O(n)</li>
      </ul>
    </li>
  </ul>
```java
class Node{
  public int data;
  public Node next;
  public Node prev;
  constructor(int data){
    this.data = data;
  }
}

class DoublyLinkedList{
  Node head = new Node(5);
  Node tail = new Node(7);
  head.next = tail;
  tail.prev = head;

  public Node add(Node head, Node newNode, int position){
    if(position == 0){
      newNode.next = head;
      newNode.prev = null;
      head.prev = newNode;
    }

    Node current = head;

    for(int i = 0; i < position; i++){
      if(current.next == null){
        newNode.prev = current;
        current.next = newNode;
        newNode.next = null;
        return head;
      }
      else{
        current = current.next;
      }
    }

    newNode.prev = current.prev;
    newNode.next = current; 
    current.prev = newNode; 
    current.prev.next = newNode; 

    return head;

  }

  public Node remove(Node head, int position){
    if(position == 0){
      head.next = null;
      head.prev = null;
      head.next.prev = null;
    }

    Node current = head;

    for(int i = 0; i < position; i++){
      if(current.next == null){
        current.prev = null;
        current.prev.next = null;
        return head;
      }
      else{
        current = current.next;
      }
    }

    current.next.prev = current.prev;
    current.prev.next = current.next;
    current.next = null;
    current.prev = null;

    return head;
  }

}

```
---

### **Dictionaries**
- Synonymous with Maps and Associative Arrays
- First Abstract Data Structure
- Key and value pair system (think Social Security 💳 )
- <Highlight color="#25c2a0">Key:</Highlight> Allows for indexing the dictionary using virtually any primitive value, must be unique within the table
- <Highlight color="#00B4AB">Value:</Highlight> The corresponding data to the key, there can be duplicates within the dictionary but each key can only have one value (TLDR: 1 key = 1 value)
- Hash Tables
  - Better alternative than an array b/c storage with an array leads to many Nil (null for class values) values
  - Scales! Woohoo!
  - <Highlight color="#25c2a0">Hash Function:</Highlight> A specific function that strategically maps it to the table so that it may be retrieved easily
    - Examples: SHA-256 and MD5 (these are cryptographic hash functions)
  - <Highlight color="#00B4AB">Hash Collision:</Highlight> An instance where the hash function maps to the same value for two unique keys.
    - Open Addressing:
      - Placing the key @ an open location (Nil value)
      - Could cause problems later on if another collision occurs at the new location and could slow down the response time of the hash table
    - Closed Addressing:
      - Creates a Linked List at the same value
- <Highlight color='#FFD832' fontColor={ true }>Big O Notation</Highlight> 
 <ul>
    <li> Searching O(n) </li>
    <li> Accessing O(n) </li>
    <li> Adding/Deleting O(n) </li>
    <li>Worst case being that all values map to 0 and Linked Lists must be used 
      <ul>
        <li>Though average time is O(1) for Search, Accessing, and Adding/Deleting</li>
      </ul>
    </li>
  </ul>

```java
import java.util.Hashtable;

Hashtable<String, Integer> table = new Hashtable<>();

table.put("a",1);
//table = {a=1}

table.put("b",2);
//table = {a=1,b=2}

table.get("a");
//1

table.get("c");
//null

table.remove("a");
//table = {b=2}

```

## __Hierarchical Data Structures__

---
*note: there will not be time complexity equations for the hierarchical data structures*
### **Trees**
- Different from linear/sequential data structures b/c there is no definitive end
- A collection of Nodes connected together to form a hierarchical representation of the data
- Similar to Linked List but with more options
- Terminology:
  - <Highlight color="#25c2a0">Vertice:</Highlight> A Node on the tree
  - <Highlight color="#F07178">Edges:</Highlight> The connection between vertices
  ---
  - <Highlight color="#C590E8">Root Node:</Highlight> The Topmost Node
  - <Highlight color="#89DDFF">Child Node:</Highlight> A Node that has an edge connecting to a Node one level above itself
  - <Highlight color="#B1E16A">Parent Node:</Highlight> Any Node that has 1+ Child Nodes
  - <Highlight color="#25c2a0">Leaf Node:</Highlight> Any Node that has no Child Nodes
  ---
  - <Highlight color="#F5A3A7">Height:</Highlight> Number of edges on the longest path towards a leaf node
  - <Highlight color="#00A3E5">Depth:</Highlight> Number of edges required to get from a particular node to the root node
- **Binary Search Tree:**
  - Nodes can only have up to 2 children
  - The less or equal to the parent value is on the left branch, the greater or equal to the parent value is on the right branch
  - No 2 Nodes can repeat
  - Search time: O(log(n))
```java
//basic binary search tree

class Node{
  int data;
  Node left, right;

  constructor(int data){
    this.data = data;
    left = null;
    right = null;
  }
}

class BinarySearchTree{
  Node root = new Node(5);

  Node left = new Node(2);

  Node right = new Node(6);

  root.left = left;

  root.right = right;
}

```
---
### <a id="tries"></a> **Tries**
- A tree-like data structure with restrictions
- Nodes store letters
- AKA prefix trees & digital trees
- Word retrieval
- Starts with an empty root node
- A letter is linked to the root and its children are the letters of the alphabet that create a valid word
- <Highlight color="#25c2a0">Flagging:</Highlight> A pointer marking the end of a word on the trie

---
### **Heaps**
- A special tree where all parents are either less than or greater than their children
  - <Highlight color="#C590E8">Min Heaps:</Highlight> Value of the root is the <i><b>minimum</b></i> and all parents have smaller values than its children
  - <Highlight color="#00B4AB">Max Heaps:</Highlight> Value of the root is the <i><b>max</b></i> and all parents have larger values than its children
```text
pseudo-code for now

- given data, the first value becomes the root 
- then recursively go through the list to determine children

- to pop off the top:
  * remove the root
  * move to either the furtherest left or right
  * heapify until heap is sorted

```

### **Graphs**
- Composed of Nodes (Verticies) and Edges
- Finite amount of Nodes and Edges
  
- Graph Notation
  - <Highlight color="#C590E8">Vertice Set:</Highlight> List of all Nodes within the graph
  - {1,2,3,4,5}
  - <Highlight color="#25c2a0">Edge Set:</Highlight> Each element in the set is an ordered pair that represents the relationship between the Nodes
  -  {(1,3),(2,1),(3,5),(4,1),(5,4)}


- Nodes that have an edge are dubbed adjacent
  
- <Highlight color="#FFD832" fontColor={true}>Properties of a Graph</Highlight>

  - **Undirected**:
    - The direction that is being traversed **does not** matter
    - Represented by edges w/o arrows
    - Think friend circle irl
  - **Directed**:
    - The direction that is being traversed **does** matter
    -  Represented by edges w/ arrows
    -  Think following people on Twitter
   - **Cyclic**:
     - Contains a path that connects back to itself
     - All undirected graphs are cyclical
   - **Acyclic**:
     - No paths lead back to itself
     - Only can apply to directed graphs
  - **Weighted Edges**:
    - Numerical value assigned to the edges of a graph
      - AKA the Cost
    - Usually related to the properties of the graph
  - **Unweighted Edges**:
    - Every edge is the same value


- Example Graphs:
  - Undirected Cyclical Heaps with Weighted Edges
    - Shortest possible path algo
  - Unweighted Cyclical Graphs (Both Undirected and Directed)
    - GraphQL