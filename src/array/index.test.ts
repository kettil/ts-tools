import arrayUnique from './unique';
import * as array from '.';

describe('"array" tools', () => {
  test('it should create object with all "array" tools', () => {
    const expected = { arrayUnique };

    expect(array).toEqual(expected);
  });
});