import test from 'node:test';
import assert from 'node:assert/strict';
import { parseChalkSpec } from '../dist/index.js';

test('public entry point parses a valid mathematical document', () => {
  const spec = { viewport: [-2, 2, 2, -2], elements: [{type:'circle',center:[0,0],radius:1}], showAxis: false };
  const result = parseChalkSpec(JSON.stringify(spec));
  assert.deepEqual(result.viewport, spec.viewport);
  assert.deepEqual(result.elements, spec.elements);
  assert.equal(result.showAxis, false);
});

test('malformed JSON and invalid viewports fail without throwing', () => {
  for (const raw of ['{', 'null', JSON.stringify({viewport:[1,2,3],elements:[]}), JSON.stringify({viewport:[1,2,3,'4'],elements:[]}), JSON.stringify({viewport:[1,2,3,4],elements:{}})]) {
    assert.equal(parseChalkSpec(raw), null);
  }
});
