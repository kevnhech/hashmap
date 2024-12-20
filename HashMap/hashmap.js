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

    if (bucket[index] == undefined) {
      list.append(key, value);
      bucket[index] = list;
    } else if (bucket[index].containsKey(key)) {
      bucket[index].at(bucket[index].findKey(key)).value = value;
    } else {
      bucket[index].append(key, value);
    }
  }

  get(key) {
    let bucket = this.bucket;
    let value = null;
    bucket.forEach((list) => {
      if (list.containsKey(key)) value = list.at(list.findKey(key)).value;
    });
    return value;
  }
}
