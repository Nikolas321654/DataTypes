'use strict';

const countTypesInArray = function(arr) {
  const obj = {};
  for (const item of arr) {
    const type = typeof item;
    obj[type] = (obj[type] || 0) + 1;
  }
  return obj;
};

module.exports = { countTypesInArray };
