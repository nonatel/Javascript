let url_1 = 'http://imgur.com/a/cjh4E'
let url_2 = 'http://imgur.com/gallery/59npG'
let url_3 = 'http://imgur.com/OzZUNMM'
let url_4 = 'http://i.imgur.com/altd8Ld.png';

const type = function(url) {
  if (url.indludes('/a/')) {
    return "album"
  } else if (url.includes('/gallery/')) {
    return "gallery"
  } else {
    return "image"
  }
}

const id = function(url) {
  let arr = url.split('/')
  let id = arr[arr.length - 1]
  if (id.includes('.png')) {
    id = id.split('.')
    return id[0]
  } else {
    return id
  }
}

function createObject(url) {
  let id1 = id(url)
  let type1 = type(url)
  const id_arr = ['id']
  id_arr.push(id)
  const type_arr = ['type']
  type_arr.push(type)
  const finalArray = []
  let finalObject = Object.fromEntries(finalArray.push(id_arr, type_arr))
  return finalObject
}

console.log(createObject(url_1))
