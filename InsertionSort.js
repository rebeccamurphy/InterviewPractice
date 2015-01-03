/*
	Plain Insertion Sort
	Shifts values instead of swapping
	
	Overall Complexity: O(n^2)

	Insertion sort's overall complexity is O(n2) on average, regardless of the method of insertion. 
	On the almost sorted arrays insertion sort shows better performance, up to O(n) in case of applying insertion sort to a sorted array. 
	Number of writes is O(n2) on average, but number of comparisons may vary depending on the insertion algorithm. 
	It is O(n^2) when shifting or swapping methods are used and O(n log n) for binary insertion sort.

	From the point of view of practical application, an average complexity of the insertion sort is not so important. 
	As it was mentioned above, insertion sort is applied to quite small data sets (from 8 to 12 elements).
	Therefore, first of all, a "practical performance" should be considered. 
	In practice insertion sort outperforms most of the quadratic sorting algorithms, like selection sort or bubble sort.

	Insertion sort properties

		adaptive (performance adapts to the initial order of elements);
		stable (insertion sort retains relative order of the same elements);
		in-place (requires constant amount of additional space);
		online (new elements can be added during the sort);

*/


var insertionsort = function(list){
	var i, j, temp;

	for (i = 1; i < list.length; i++) {
		//first element checking for swap
        temp = list[i];
        j = i;
        while (j > 0 && list[j - 1] > temp) {
        	//if a value at the left side of the list is greater than the right side, shift value to right
            list[j] = list[j - 1];
            j--;
        }
        //when the value is on the correct side, insert value where is is sorted to
        list[j] = temp;
     }
     return list;
}
