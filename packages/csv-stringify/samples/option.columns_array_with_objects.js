
import { stringify } from 'csv-stringify';
import assert from 'assert';

stringify([
  { a: '1', b: '2' }
], {
  columns: [ { key: 'a' }, { key: 'b' } ]
}, function(err, data){
  assert.equal(data, '1,2\n');
});
