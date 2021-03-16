/**
 * 只计算 number string boolean 类型
 * number 8个字节
 * string 每个长度2个字节
 * boolean 4个字节
 * 更完整的类型计算，可参考开源库 object-sizeof
 * @param object
 * @returns {number}
 */
function countByte(object) {
    const objectType = typeof object;
    switch (objectType) {
        case "number":
            return 8;
        case "string":
            return object.length * 2;
        case "boolean":
            return 4;
        case "object": {
            if (Array.isArray(object)) {
                return object.map(countByte).reduce((res, current) => {
                    return res + current
                }, 0)
            } else {
                return sizeOfObject(object)
            }
        }
        default: return 0;
    }
}
function sizeOfObject(object) {
    if (object === null) {
        return 0;
    }
    let bytes = 0;
    const seen = new WeakSet(); // 缓存value是对象的情况
    // ⚠️注意：对象中的key也占用内存
    // 引用同一个对象的情况，只占用一次内存
    // null不占用内存
    let keys = Object.keys(object)
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        bytes += countByte(key);
        if (typeof object === 'object' && object[key] !== null) {
            if (seen.has(object[key])) {
               continue;
            }
            seen.add(object)
        }
        bytes += countByte(object[key]);
    }
    return bytes;
}

console.log(countByte({
    '10': '10', // 4 + 4
    '11': true, // 4 + 4
    '12': 12, // 4 + 8
}))
