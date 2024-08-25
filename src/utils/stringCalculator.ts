export function add(numbers: string): number {
    if (!numbers) return 0;
  
    const delimiterRegex = /[,|\n]/;
    const parts = numbers.split(delimiterRegex);
    const numArray = parts.map(num => {
      const parsed = parseInt(num, 10);
      if (isNaN(parsed)) throw new Error('Invalid number');
      return parsed;
    });
  
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return numArray.reduce((acc, curr) => acc + curr, 0);
  }
  