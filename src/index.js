module.exports = function check(str, bracketsConfig) {
  let obj = {
    '(':')',
    '[':']',
    '{':'}',
    '|':'|',
    '1':'2',
    '3':'4',
    '5':'6',
    '7':'7',
    '8':'8'
  }
  let arr = [];
  for(let i = 0; i < str.length; i++){
    if(arr.length === 0) arr.push(str[i])
    else if (obj[arr[arr.length -1]] === str[i]) arr.pop()
    else if(arr[arr.length - 1] === str[i] || arr[arr.length - 1] !== str[i]) arr.push(str[i])
  }
  return arr.length === 0
}
