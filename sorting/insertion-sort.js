function insertionSort(sequence) {
  if (!Array.isArray(sequence) && !typeof sequence === 'string') {
    throw new TypeError('sequence must be a valid String or Array'); 
  }

  sequence = Array.isArray(sequence) ? sequence.slice() : sequence.split('');

  for (let i = 1; i < sequence.length; i += 1) {
    let j = i - 1;
    let key = sequence[i];

    while (j >= 0 && key < sequence[j]) {
      sequence[j + 1] = sequence[j];
      sequence[j] = key;
      j -= 1;
    }
  }

  return Array.isArray ? sequence : sequence.join('');
}

export default insertionSort;

