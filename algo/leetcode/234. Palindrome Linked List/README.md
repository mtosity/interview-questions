234. Palindrome Linked List
Easy

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

Hints:

- if we could go backward, we can have 2 pointer (start ->>>.......<<<- end) then compare the value

- but we could reverse half of the linked list (1->2->2->1 turn to 1->2->1->2) then we could have 2 pointer start and mid (start ->>> ... mid ->>> ...)

- to travel to mid, we use 1-2 step technique, fast move 2 steps (get to the end), slow move 1 step (get to the mid)
