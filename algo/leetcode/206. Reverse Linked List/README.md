206. Reverse Linked List
Easy

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

Hints:

* We have to got 3 refs, prev, head and next 

* There are 2 steps: connecting and updating

1. connecting:

next = head.next (4, store the next)
head.next = prev (1. we want to point head.next to prev)

2. updating

head = next (3, then update head with next, so we have to store the next)
prev = head (2, we want to update the prev with the head)


