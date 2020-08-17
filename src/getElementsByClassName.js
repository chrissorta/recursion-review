// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className
) {
  let outputArr = [];

  //find child nodes
  //iterated through _.each
  //_.contains className, push to outputArr
  //ifchildren
  //run inner function recursively
  var childNodes = function (node) {
    let nodes = node.childNodes;

    nodes.forEach(function (currentNode) {
      if (_.contains(currentNode.classList, className)) {
        outputArr.push(currentNode);
      }

      if (currentNode.hasChildNodes()) {
        return childNodes(currentNode);
      }
    });
  };

  childNodes(document);

  return outputArr;
};
