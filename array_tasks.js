var arrayTasks = {

	concat: function (arr1, arr2) {
		var arr3 = arr1.concat(arr2);
		return arr3;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var newArray = arr.map(x => x * x);
		return newArray;
	},

	sum: function (arr) {
		var newArray = arr.reduce(function (a, b) {
  return a + b;
	}, 0);
	return newArray;
	},

	findDuplicates: function (arr) {
    var result = [];

  	arr.forEach(function(element, index) {
    // Find if there is a duplicate or not
    	if (arr.indexOf(element, index + 1) > -1) {
      // Find if the element is already in the result array or not
      	if (result.indexOf(element) === -1) {
        	result.push(element);
      	}
    	}
  	});
  	return result;
	},

	removeAndClone: function (arr, valueToRemove) {
		var newarr = arr.filter(function(a){return a !== valueToRemove})
		return newarr;
	},

	findIndexesOf: function (arr, itemToFind) {
		var answer = [];
		arr.filter(function(elem, index, array){
		    if(elem == itemToFind) {
		        answer.push(index);
		    }
		});
		return answer;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var filtered = arr.filter(function(element, index, array) {
  	return (index % 2 !== 0);
		});
		var result = arrayTasks.square(filtered);
		return arrayTasks.sum(result);

	}

}

module.exports = arrayTasks
