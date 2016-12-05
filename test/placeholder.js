import test from 'ava'
import { _ } from '../'


test('placeholder', t => {
  let x = ["aa", "bbb", "cccc"].map(_.length);
  t.deepEqual(x, [2, 3, 4])
});

test('placeholder', t => {
  let x = [0, 1, 2].map(_ + 1);
  t.deepEqual(x, [1, 2, 3])
});

test('nested', t => {
  let x = [[0], [1], [2]].map(_.map(_ + 1));
  t.deepEqual(x, [[1], [2], [3]])
});
