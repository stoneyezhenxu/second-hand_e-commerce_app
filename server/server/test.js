


let messagesObj = { 1: 'apple', 2: 'ccq', 3: 'bana' }


function descend (a, b) {
  return b[1] - a[1]
}
data_list = Object.keys(messagesObj).map((key) => [key, messagesObj[key]])
console.log("data_list: ", data_list)
let tmp = data_list.sort((a, b) => b[1] < a[1] ? -1 : 1)
console.log(tmp)
// console.log(data_list)

