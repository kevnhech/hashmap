# hashmap
Start by creating a HashMap class or factory function. It’s up to you which you want to use. It should have at least two variables for load factor and capacity. Then proceed to create the following methods: (Done)
1. hash(key) takes a key and produces a hash code with it. We already implemented a fairly good hash function in the previous lesson. (Done)
2. set(key, value) takes two arguments: the first is a key, and the second is a value that is assigned to this key. (Done)
3. get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null. (Done)
4. has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map. (Done)
5. remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false. (Done)
6. length() returns the number of stored keys in the hash map. (Done)
7. clear() removes all entries in the hash map. (Done)
8. keys() returns an array containing all the keys inside the hash map.
9. values() returns an array containing all the values.
10. entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
