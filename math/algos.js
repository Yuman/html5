const countingSort = function (nums) {
  let counter = [];
  for (let i = 0; i <= Math.max(...nums); i++) {
    counter[i] = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    counter[nums[i]]++;
  }

  let sorted = [];
  for (let i = 0; i < counter.length; i++) {
    for (let c = 0; c < counter[i]; c++) {
      sorted.push(i);
    }
  }
  return sorted;
}

const selectionSort = function (list) {
  for (let i = 0; i < list.length; i++) {
    let minValue = list[i];
    let minIndex = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < minValue) {
        minValue = list[j];
        minIndex = j;
      }
    }
    if (minValue < list[i]) {
      [list[i], list[minIndex]] = [list[minIndex], list[i]];
    }
  }
  return list;
}