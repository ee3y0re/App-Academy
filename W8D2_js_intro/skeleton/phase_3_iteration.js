function bubbleSort(array) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for(let i = 0; i < array.length; i++) {
            let j = i + 1
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]]
                // let temp = array[i];
                // array[i] = array[i + 1];
                // array[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return array;
}

let array = [1, 6, 5, 3, 8, 9, 0]
console.log(bubbleSort(array))

function substrings(string) {
    let subs = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j <= string.length; j++) {
            if (!subs.includes(string.slice(i, j))) { //avoiding duplicates
                subs.push(string.slice(i, j));
            }
        }
    }

    return subs;
}

console.log(substrings("Chef Boyardee"))