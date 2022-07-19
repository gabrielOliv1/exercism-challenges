// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

function countOdds(low, high) {
    let counter = low - 1;
    let array = [];

    for (let i = low; i <= high; i++) {
        counter++;


        if (counter % 2 != 0) {
            array.push(counter);
        }
    }

    return array.length;
}

countOdds(3, 7);