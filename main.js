function createMultiplyTable (start, end) {
    let checkResult = checkInput(start, end);
    if(checkResult!=="Success"){
        return checkResult;
    }else{
        return getMultiplyTable(start, end);
    }
}

function checkInput(start, end){
    let checkResult;
    if(!(Number.isInteger(start) && Number.isInteger(end))){
        checkResult = "错误的参数类型";
    }else if(start > end){
        checkResult = "start不能大于end";
    }else if(start > 1000 ||end > 1000){
        checkResult = "超出内存限制";
    }else {
        checkResult = "Success";
    }
 return checkResult;
}

// function doMultiplyOperation(start, end){
//     let multiplyTable = [];
//     for(let i=start; i<=end; i++){
//         for (let j=start; j<=i; j++){
//             multiplyTable+=j+"*"+i+"="+i*j;
//             if(i!==j){
//                 multiplyTable += "  "
//             }
//         }
//           if(i<end) {
//               multiplyTable+="\r\n";
//           }
//     }
//     return multiplyTable;
// }

function getMultiplyTable(start, end){
    let result = "";
    for(let index=start; index<=end; index++){
        let  separator = index===end ? "" : "\r\n";
        result = result+getLine(start,index) + separator;
    }
    return result;
}

function getLine(start, end){
    let result = "";
    for(let index=start; index<=end; index++){
        let  separator = index===end ? "" : "\t";
        result = result + getExpression(index,end) + separator;
    }
    return result;
}

function getExpression(start,end){
    return `${start}*${end}=${start*end}`;
}



module.exports = createMultiplyTable;
