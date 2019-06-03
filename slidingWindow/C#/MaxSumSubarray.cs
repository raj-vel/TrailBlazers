using System;
					
public class Program
{
	public static void Main()
	{
		var input1 = new int[] { 4, -3, -2, 2, 3, 1, -2, -3, 4, 2, -6, -3, -1, 3, 1, 2 };
		var res1 = MaxSumSubArray(input1);
		Console.WriteLine("output 1 -- " + res1);
		
		var input2 = new int[] { -2,1,-3,4,-1,2,1,-5,4 };
		var res2 = MaxSumSubArray(input2);
		Console.WriteLine("output 2 -- " + res2);
	}
	
	// https://leetcode.com/problems/maximum-subarray/submissions/
	private static int MaxSumSubArray(int[] arr)
	{
	 if(arr == null || arr.Length < 1)
	 {
	  return -1;
	 }
	 if(arr.Length == 1)
		return arr[0];
	
	 int max = arr[0];
	 int curr = 0;
	 
	 for(int i = 0; i < arr.Length; i++)
	 {
	  curr = curr + arr[i];
	  max = Math.Max(curr, max);
	
	  if(curr < 0)
		  curr = 0;
	 }
		
	 return max;
	}
}
