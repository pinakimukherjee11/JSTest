var tier = function(num) {
    var tierVal = 'classic'
    if (num === 1){
        tierVal = 'premier'
    } 
    return tierVal;
}

module.exports = { tier };