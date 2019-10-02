String.prototype.trim = function () {
    var start, end;
    start = 0;
    end = this.length;
    while (start < end && this.charAt(start) == " ")
        start++;
    while (start < end && this.charAt(end-1) == " ")
        end--;

    //substring方法有取前不取后的特点，所以实际取到的字符串为下标为start和end-1的字符串
    return this.substring(start,end);
}
