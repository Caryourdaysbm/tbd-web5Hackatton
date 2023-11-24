import { Web5 } from '@web5/api';
/*
Needs globalThis.crypto polyfill. 
This is *not* the crypto you're thinking of.
It's the original crypto...CRYPTOGRAPHY.
*/
import { webcrypto } from 'node:crypto';

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

const { web5, did: aliceDid } = await Web5.connect();
// console.log(aliceDid);

// CRUD
// Create
const { record } = await web5.dwn.records.create({
    data: 'Hello, Web5! SBM is just trying to use web5',
    message: {
      dataFormat: 'text/plain',
    },
  });

  console.log('writeResult', record);

  // Read
  const readResult = await record.data.text();
  console.log('readResult', readResult)

  // Update
  const updateResult = await record.update({
    data: 'Hello, Web5! I am updated by SBM.',
  });

  console.log('updateResult', await record.data.text())

// Delete
const deleteResult = await record.delete();
console.log('deleteResult', deleteResult)