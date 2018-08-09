function getDependencies(tree, resultArr) {
	var resultArr = resultArr || [];
	if(!tree || !tree.dependencies) {
        return [];
    }
    Object.keys(tree.dependencies).forEach(function(prop) {
  	// `prop` is the property name
  	// `data[prop]` is the property value
    	var str = prop + "@" + tree.dependencies[prop].version;
    	if(!resultArr.includes(str)) {
 			resultArr.push(str);
         }
 		getDependencies(tree.dependencies[prop], resultArr);
	});
    return resultArr.sort();
  }
  module.exports = getDependencies;