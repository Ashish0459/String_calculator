class StringCalculator {
  add(numbers) {
    // Case 1: Return 0 for an empty string
    if (numbers === "") {
      return 0;
    }

    // Case 2: Handle custom delimiters
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n", 2);
      delimiter = new RegExp(parts[0][2]);
      numbers = parts[1];
    }

    const numArray = numbers.split(delimiter).map(Number);

    const negatives = numArray.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    // Case 4: Ignore numbers greater than 1000
    return numArray
      .filter((num) => num <= 1000)
      .reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
