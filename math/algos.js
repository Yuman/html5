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

const modeF = arr => { if (arr.filter((x, index) => arr.indexOf(x) == index).length == arr.length) return arr; else return modeF(arr.sort((x, index) => x - index).map((x, index) => arr.indexOf(x) != index ? x : null).filter(x => x != null)) };


// https://stackoverflow.com/questions/52898456/simplest-way-of-finding-mode-in-javascript
const modeS = a => {
  a.sort((x, y) => x - y);

  var bestStreak = 1;
  var bestElem = a[0];
  var currentStreak = 1;
  var currentElem = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i - 1] !== a[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }
      currentStreak = 0;
      currentElem = a[i];
    }
    currentStreak++;
  }
  return currentStreak > bestStreak ? currentElem : bestElem;
};

const modeO = a =>
  Object.values(
    a.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }

      count[e][0]++;
      return count;
    }, {})
  ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];
