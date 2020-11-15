//generating windbag
function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function sentence(murMur) {
  let randomNumber = Math.floor(Math.random() * murMur.length)
  return murMur[randomNumber]
}


function generateWindbag(options) {
  // define things people want
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code', '人若不帥都是變態'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計', '設計不就是對齊就好'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢', '沒時間交女友']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常', '很輕鬆']

  //define dummy data
  // const options = {
  //   career: 'engineer'
  // }



  //create collections to store what they want
  let collection = []
  let murMur = []
  if (options.career === 'engineer') {
    collection = collection.concat(task.engineer.join(',').split(','))
  }

  if (options.career === 'designer') {
    collection = collection.concat(task.designer.join(',').split(','))
  }

  if (options.career === 'entrepreneur') {
    collection = collection.concat(task.entrepreneur.join(',').split(','))
  }


  //create pharse
  murMur = murMur.concat(phrase.join(',').split(','))


  if (collection.length === 0) {
    return '請快選擇幹話職業，不要浪費彼此時間3Q'
  }

  let password = []
  password += sample(collection)
  password += sentence(murMur)


  //return windbag
  return password
}

//export generate passport for other files
module.exports = generateWindbag