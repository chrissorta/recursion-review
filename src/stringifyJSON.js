// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  //Check String;
  if (typeof (obj) === 'string') {
    return '"' + obj + '"';
  }

  //Check null
  if (obj === null) {
    return 'null';
  }

  //array
  if (Array.isArray(obj)) {
    var string = obj.map(element => stringifyJSON(element));
    return '[' + string.join(',') + ']';
  }

  //Check Object
  if (typeof (obj) === 'object') {
    let string = '{';
    let length = Object.keys(obj).length;
    let i = 0;

    for (let key in obj) {
      if (typeof (obj[key]) === 'function' || obj[key] === undefined) {
        continue;
      }
      string += '"' + key.toString() + '"' + ':' + stringifyJSON(obj[key]);
      i++;
      if (i < length) {
        string += ',';
      }
    }

    return string + '}';
  }

  //handles empty objects,numbers, and booleans
  return '' + obj;
};