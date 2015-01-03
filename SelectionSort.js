/*
	Selection Sort
	Complexity O(n^2)

	Selection sort stops, when unsorted part becomes empty. As we know, on every step number 
	of unsorted elements decreased by one. Therefore, selection sort makes n steps 
	(n is number of elements in array) of outer loop, before stop. 
	Every step of outer loop requires finding minimum in unsorted part. 
	Summing up, n + (n - 1) + (n - 2) + ... + 1, results in O(n2) number of comparisons. 
	Number of swaps may vary from zero (in case of sorted array) to n - 1 
	in case array was sorted in reversed order), which results in O(n) number of swaps. 
	Overall algorithm complexity is O(n2).

	Fact, that selection sort requires n - 1 number of swaps at most, makes it very efficient in situations,
	when write operation is significantly more expensive, than read operation.

*/

var selectionsort = function(list){
	var i, j, temp, minIndex;
	for(i=0; i< list.length; i++){
		minIndex=i;
		for (j=i; j<list.length; j++){
			if (list[j]<list[minIndex])
				minIndex =j;
		}
		if (minIndex!= i){
			temp = list[i];
			list[i] = list[minIndex];
			list[minIndex] =temp;
		}
	}
	return list;
};