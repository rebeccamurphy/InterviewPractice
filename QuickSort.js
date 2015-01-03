/*
	QuickSort 
	Complexity: O(n log n)

	The divide-and-conquer strategy is used in quicksort. Below the recursion step is described:
	1)	Choose a pivot value. We take the value of the middle element as pivot value, 
		but it can be any value, which is in range of sorted values, even if it doesn't present in the array.
	2)	Partition. Rearrange elements in such a way, that all elements which are lesser than the pivot 
		go to the left part of the array and all elements greater than the pivot, go to the right part of the array.
	 	Values equal to the pivot can stay in any part of the array. Notice, that array may be divided in non-equal parts.
	3)	Sort both parts. Apply quicksort algorithm recursively to the left and the right parts.

	On the average quicksort has O(n log n) complexity, but strong proof of this fact is not trivial and not presented here. 
	In worst case, quicksort runs O(n2) time, but on the most "practical" data it works just fine and 
	outperforms other O(n log n) sorting algorithms.
*/



var quicksort = function(list, left, right){
	left = (left===undefined)? 0: left;
	right= (right===undefined)? list.length-1:right;

	var i = left;
	var j = right;
	var pivotVal = list[Math.floor((left+right)/2)];


	console.log("Current list: " + list);
	console.log("Current Partion: " +list.slice(left, right+1));
	console.log("Current Pivot Value: " + pivotVal);

	while (i<=j){
		var temp;
		while (list[i]<pivotVal)
			i++;
		while (list[j]>pivotVal)
			j--;
		if (i<=j){
			temp =list[i];
			list[i] = list[j];
			list[j] =temp;
			i++;
			j--;
		}
		
	}

	console.log("Partion Sorted: " +list.slice(left, right+1));
	console.log("List After Partion Sort list: " + list);
	if (left < j)
		quicksort(list, left, j);
	if (i <right)
		quicksort(list, i, right);

	return list;
}