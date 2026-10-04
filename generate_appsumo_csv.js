const fs = require('fs');
const path = require('path');

const CHARS = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';

function randomSegment(len = 4) {
  let res = '';
  for (let i = 0; i < len; i++) {
    res += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return res;
}

const codes = new Set();
while (codes.size < 1000) {
  const code = `AS-DOC-${randomSegment()}-${randomSegment()}-${randomSegment()}`;
  codes.add(code);
}

const lines = ['Code', ...Array.from(codes)];
const csvContent = lines.join('\r\n');

const targetPath = path.join(__dirname, 'appsumo_codes.csv');
fs.writeFileSync(targetPath, csvContent, 'utf8');

console.log(`Generated ${codes.size} unique AppSumo voucher codes in ${targetPath}`);
