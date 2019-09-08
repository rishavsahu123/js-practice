function Node(key, value, next = null, pre = null) {
  this.key = key
  this.value = value
  this.next = next
  this.pre = pre
}

class LRU {
  constructor(limit) {
    this.size = 0
    this.limit = limit
    this.head = null
    this.tail = null
    this.cache = {}
  }

  write({ key, value }) {
    if (!this.head) {
      this.head = this.tail = new Node(key, value)
    } else {
      let node = new Node(key, value, this.head)
      this.head = node
      this.head.pre = node
    }
    this.cache[key] = this.head;
    this.size++
  }

  read(key) {

  }

}


// var node = new LRU(5)
// console.log(node)
