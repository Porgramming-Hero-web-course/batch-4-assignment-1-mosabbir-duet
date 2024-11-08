function countWordOccurrences(sentence: string, word: string): number {
  let count = 0;

  const lowerCaseSentence = sentence.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  const words = lowerCaseSentence.split(" ");

  for (const word of words) {
    if (word.includes(lowerCaseWord)) {
      count++;
    }
  }

  return count;
}

countWordOccurrences("I love TypeScript", "typescript");
