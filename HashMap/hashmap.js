import { LinkedList } from "../LinkedList/linkedlist.js";

class HashMap {
  constructor() {
    this.bucket = new Array(16);
    this.loadFactor = 0.75;
    this.capacity = this.bucket.length;
  }

  hash(key) {
    let hashCode = 0;
    let capacity = this.capacity;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
  }

  set(key, value) {
    let list = new LinkedList();
    let index = this.hash(key);
    let bucket = this.bucket;
    if (index < 0 || index >= bucket.length) {
      throw new Error("Trying to access index out of bounds");
    } else {
      if (bucket[index] == undefined) {
        list.append(key, value);
        bucket[index] = list;
      } else if (bucket[index].containsKey(key)) {
        bucket[index].at(bucket[index].findKey(key)).value = value;
      } else {
        bucket[index].append(key, value);
      }
    }
    if (this.length() > Math.round(this.capacity * this.loadFactor)) {
      this.grow();
    }
  }

  grow() {
    let oldBucket = this.bucket;
    this.bucket = new Array(this.capacity * 2);
    this.capacity = this.bucket.length;
    let arr = [];
    oldBucket.forEach((list) => {
      arr = arr.concat(list.returnNodes());
    });
    arr.forEach((node) => {
      this.set(node.key, node.value);
    });
  }

  get(key) {
    let bucket = this.bucket;
    let value = null;
    bucket.forEach((list) => {
      if (list.containsKey(key)) value = list.at(list.findKey(key)).value;
    });
    return value;
  }

  has(key) {
    let bucket = this.bucket;
    let bool = false;
    bucket.forEach((list) => {
      if (list.containsKey(key)) bool = true;
    });
    return bool
  }

  remove(key) {
    let bucket = this.bucket;
    let bool = false;
    let index = this.hash(key);
    bucket.forEach((list) => {
      if (list.containsKey(key) && list.count > 1) {
        list.removeAt(list.findKey(key));
        bool = true;
      } else if (list.containsKey(key) && list.count == 1) {
        delete bucket[index];
        bool = true;
      }
    });
    return bool;
  }

  length() {
    let bucket = this.bucket;
    let bool = false;
    let count = 0;
    bucket.forEach((list) => {
      count += list.size();
    });
    return count;
  }

  clear() {
    this.bucket = new Array(16);
    this.capacity = this.bucket.length;
  }

  keys() {
    let bucket = this.bucket;
    let arr = [];
    bucket.forEach((list) => {
      arr = arr.concat(list.returnKeys());
    });
    return arr;
  }

  values() {
    let bucket = this.bucket;
    let arr = [];
    bucket.forEach((list) => {
      arr = arr.concat(list.returnValues());
    });
    return arr;
  }

  entries() {
    let bucket = this.bucket;
    let nodesArr = [];
    let arr = [];
    bucket.forEach((list) => {
      arr = arr.concat(list.returnNodes());
    });
    arr.forEach((node) => {
      nodesArr.push([node.key, node.value]);
    });
    return nodesArr;
  }
}

const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('apple', 'I am the new value.');
test.set('banana', 'I am the new value.');
test.set('carrot', 'I am the new value.');

test.set('moon', 'silver');

// Test the other methods of your hash map

console.log(test.get("apple"));
console.log(test.has("apple"));
console.log(test.remove("apple"));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
