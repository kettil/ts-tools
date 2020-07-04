import compareAsc from './compareAsc';
import { SortTransform, SortCallback } from './types';

const compareTransformDesc = <T>(callback: SortTransform<T>): SortCallback<T> => (a: T, b: T) =>
  compareAsc(callback(b), callback(a));

export default compareTransformDesc;
