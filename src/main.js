// src/main.js
import {
  strToMnemonic,
  mnemonicToStr,
  heuristicMnemonic
} from 'worcoder-js';

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const encodeButton = document.getElementById('encodeButton');
  const decodeButton = document.getElementById('decodeButton');
  const dataInput = document.getElementById('dataInput');
  const mnemonicInput = document.getElementById('mnemonicInput');

  // Encode Function
  encodeButton.addEventListener('click', () => {
    const data = dataInput.value.trim();
    if (data === '') return;

    const mnemonic = strToMnemonic(data);
    mnemonicInput.value = mnemonic;

    navigator.clipboard.writeText(mnemonic);
  });

  // Decode Function
  decodeButton.addEventListener('click', () => {
    let mnemonic = mnemonicInput.value.trim();
    if (mnemonic === '') return;

    // Clean up the mnemonic
    mnemonic = heuristicMnemonic(mnemonic);
    mnemonicInput.value = mnemonic;

    try {
      const data = mnemonicToStr(mnemonic);
      dataInput.value = data;

      navigator.clipboard.writeText(data);    } catch (error) {
      if (error.message.includes('ChecksumError')) {
        alert('** Error: invalid mnemonic or checksum! **');
        dataInput.value = '** Error: invalid mnemonic or checksum! **';
      } else {
        alert(`Error: ${error.message}`);
        dataInput.value = `Error: ${error.message}`;
      }
    }
  });
});
