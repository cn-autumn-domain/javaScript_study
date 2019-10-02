function ArrayTool() {}
function arrMaxNumb(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
function arrMinNumb(arr){
    var min = 0;
    for(var i = 1;i<arr.length;i++){
        if(arr[i]<arr[min]){
            min = i;
        }
    }
    return arr[min];
}

function arrsort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
ArrayTool.prototype.getMax = arrMaxNumb;
ArrayTool.prototype.sort = arrsort;
ArrayTool.prototype.getMin = arrMinNumb;