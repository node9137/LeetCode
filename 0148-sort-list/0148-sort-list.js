/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    let headF = head;
    let data = [];

    let node = head;

    while (node) {
        data.push(node.val)
        node = node.next
    }

    data.sort(function (a,b){return a-b});
    
    let i = 0;
    while(head){
        head.val = data[i];
        head = head.next;          
        i++
    }
        
    return headF        
};