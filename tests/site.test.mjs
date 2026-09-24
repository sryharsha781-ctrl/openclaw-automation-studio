import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = fileURLToPath(new URL('..', import.meta.url));
const read = (path) => readFileSync(join(root, path), 'utf8');

test('public offer requires an inquiry before payment or private intake', () => {
  const index = read('index.html');
  assert.match(index, /Website QA Pilot/);
  assert.match(index, /AI-assisted check/);
  assert.match(index, /Scope confirmed before payment/);
  assert.doesNotMatch(index, /buy\.stripe\.com/);
  assert.doesNotMatch(index, /human-reviewed/i);
});

test('contact route reaches a public-only GitHub form', () => {
  const contact = read('contact.html');
  const form = read('.github/ISSUE_TEMPLATE/audit-request.yml');
  assert.match(contact, /issues\/new\?template=audit-request\.yml/);
  assert.match(contact, /inquiry and replies are public/);
  assert.match(form, /name: Audit or service inquiry/);
  assert.match(form, /id: goal[\s\S]*?required: true/);
  assert.match(form, /Website QA Pilot \(\$50\)/);
  assert.match(read('privacy.html'), /public GitHub Issues/);
});
