/**
 * Generics are basically a kind of tool that enables you to create reusable 
 * code components that work with a number of types instead of a single type.
 */

function removeItemFromArray<T>(arr: Array<T>, item: T): Array<T> {
  const index = arr.findIndex(i => i === item)
  arr.splice(index, 1)
  return arr
}

removeItemFromArray<number>([1, 2, 3], 4)
removeItemFromArray(['1', '2', '3'], '4')