// cryptoLoader.js
export async function loadPrices() {
    const res = await fetch('http://localhost:3000/crypto');
    const data = await res.json();
    document.getElementById('prices').innerHTML = `
      <div class="crypto">Bitcoin: $${data.bitcoin.usd}</div>
      <div class="crypto">Ethereum: $${data.ethereum.usd}</div>
    `;
  }
  