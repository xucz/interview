// 数组去重复
function unique(arr) {
    return Array.from(new Set(arr))
}

/**
 * 类型被改变
 * @param arr
 * @returns {string[]}
 */
function unique2(arr) {
    let map = {};
    arr.forEach((item) => {
        map[item] = true;
    })
    return Object.keys(map);
}

/**
 * 两层循环
 * @param arr
 */
function unique3(arr) {
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === current) {
                arr.splice(j, 1);
                j --;
            }
        }
    }
    return arr;
}

function unique4(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i ++) {
        let flag = true;
        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[j] === arr[i]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(unique([1,2,2,3,3,4,3,'1', '2', '1']));
console.log(unique2([1,2,2,3,3,4,3,'1', '2', '1']));
console.log(unique3([1,2,2,3,3,4,3,'1', '2', '1']));
console.log(unique4([1,2,2,3,3,4,3,'1', '2', '1']));
