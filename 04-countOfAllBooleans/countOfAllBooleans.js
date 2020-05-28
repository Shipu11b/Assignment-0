function countOfAllBooleans(arr) {
    // Insert code here;
    var count = 0;
    arr.forEach(function(element) {
        if (element == true || element == false)
            count++;
    });
    return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;