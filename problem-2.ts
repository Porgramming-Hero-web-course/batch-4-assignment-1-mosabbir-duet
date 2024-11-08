const removeDuplicates = (param: number[]) => {
  return [...new Set(param)];
};

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
