
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length != 0){
        let min = 999999999999;
        let count = 0;
        while(count < this.stack.length){
            if(this.stack[count] < min) min = this.stack[count]
            count++
        }
        return min        
    }
};




class stack {
    // size
    size(){
        return this.arr.length;
    }
    isEmpty(){
        return this.arr.length === 0;
    }
    peek(){
        return this.arr[this.arr.length -1]
    }
}
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */