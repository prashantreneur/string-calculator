
export function add(numbers: string): number {
  if (numbers === '') return 0;

  let delimiter = ',';
  let numbersSection = numbers;

  // Check for custom delimiter
  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    if (delimiterEndIndex !== -1) {
      delimiter = numbers.substring(2, delimiterEndIndex); // Extract custom delimiter
      numbersSection = numbers.substring(delimiterEndIndex + 1); // Rest of the string
    }
  }

  // Replace newline with delimiter (handles \n in the input)
  numbersSection = numbersSection.replace(/\n/g, delimiter);

  const numberArray = numbersSection.split(delimiter).map(numStr => {
    const num = parseInt(numStr, 10);
    if (isNaN(num)) {
      throw new Error('Invalid number');
    }
    return num;
  });

  // Check for negative numbers
  const negativeNumbers = numberArray.filter(num => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
  }

  // Sum the numbers
  return numberArray.reduce((sum, num) => sum + num, 0);
}
