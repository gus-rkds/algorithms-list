function inArray(array1, array2) {
  return array1.filter((e) => array2.join(" ").includes(e)).sort();
}

// or

function inArray(arr1, arr2) {
  return arr1.filter((str) => arr2.some((str2) => str2.includes(str))).sort();
}

// or

function inArray(array1, array2) {
  let i,
    j,
    result = [];

  outer: for (j = 0; j < array1.length; j++) {
    for (i = 0; i < array2.length; i++) {
      if (array2[i].includes(array1[j])) {
        result.push(array1[j]);
        continue outer;
      }
    }
  }
  return result.sort();
}

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.
