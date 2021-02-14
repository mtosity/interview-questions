204. Count Primes

Easy
Count the number of prime numbers less than a non-negative number, n.

https://leetcode.com/problems/count-primes/

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0
 

Constraints:

0 <= n <= 5 * 106

Hints:

* Default all numbers are primes then check what numbers are not

* start with 2, eliminate all number multiply by 2 (2,4,6,8,...), then 3, 4 already eliminate when do the 2, 5, 7,...

* If n = 7, then we dont have to check for 5 (5,10,15,20,...) because 10 > 7 and 5 already default to true