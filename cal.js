function getMean() {
    var count = 0;
    var input;
    var sum = 0;
    input = parseInt(prompt("Enter a number (Enter -1 to terminate inputs)"));
    while (input != -1) {
        count++;
        sum += input;
        average = sum / count;
        input = parseInt(prompt("Enter a number (Enter -1 to terminate inputs)"));
    }

    alert("Mean is " + average);
}

function getMedian() {
    function median(numbers) {
        const sorted = numbers.sort((a, b) => a - b);
        const middle = Math.floor(sorted.length / 2);

        if (sorted.length % 2 === 0) {
            return (sorted[middle - 1] + sorted[middle]) / 2;
        }

        return sorted[middle];
    }

    const arr = [];
    input = 1
    while (input != -1) {
        input = parseInt(prompt("Enter a number (Enter -1 to terminate inputs)"));
        arr.push(input);
    }

    alert("Median is " + median(arr));
}

function getMode() {
    const arr = [];
    input = 1
    while (input != -1) {
        input = parseInt(prompt("Enter a number (Enter -1 to terminate inputs)"));
        arr.push(input);
    }
    var modes = [], count = [], i, number, maxIndex = 0;
    for (i = 0; i < arr.length; i += 1) {
        number = arr[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    alert("Mode is " + modes);
}