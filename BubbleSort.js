/*
	BubbleSort
	Complexity: O(n^2)

	Algorithm

	1)Compare each pair of adjacent elements from the beginning of an array and, if they are in reversed order, swap them.
	2)If at least one swap has been done, repeat step 1.


	Average and worst case complexity of bubble sort is O(n2). 
	Also, it makes O(n2) swaps in the worst case. Bubble sort is adaptive. 
	It means that for almost sorted array it gives O(n) estimation. 
	Avoid implementations, which don't check if the array is already sorted on every step (any swaps made). 
	This check is necessary, in order to preserve adaptive property.


*/

var bubblesort =function(list){
  	var swapped = true, j = 0, temp;
  	while (swapped) {
        swapped = false;
        j++;
        for (var i = 0; i < list.length - j; i++) {                                       
            if (list[i] > list[i + 1]) {                          
                temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                swapped = true;
            }
   		}
   	}
    return list;
}