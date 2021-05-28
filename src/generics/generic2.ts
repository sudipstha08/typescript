class Collection<TypeOfItem> {
  items: Array<TypeOfItem> = []

  add(item: TypeOfItem) {
    this.items.push(item)
  }

  remove(item: TypeOfItem) {
    const index = this.items.findIndex(i => i === item)
    this.items.splice(index, 1)
    return this.items
  }
}

const myCollection = new Collection<number>()
myCollection.add(1)
myCollection.remove(1)

const myCollectionStr = new Collection<string>()

myCollectionStr.add("1")