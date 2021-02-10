/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function reversed(head){
    console.log("head", head)
    if(!head || !head.next){
        return head;
    }
    
    let prev = null;
    while(head){
        let next = head.next;
        head.next = prev;
        
        //update
        prev = head;
        head = next;
    }
    
    return prev;
}

var isPalindrome = function(head) {
    //err checking
    if(!head){
        return true;
    }
    
    let slow = head; // mid
    let fast = head; // head
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        console.log("go next")
    }
    
    fast = head;
    slow = reversed(slow);
    console.log(fast, slow);
    
    while(slow){
        if(fast.val !== slow.val){
            return false;
        }
        
        slow = slow.next;
        fast = fast.next;
    }
    
    return true;
};