require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('🚀 Binary Wallet Backend is Running!');
});

// Wallet routes
app.post('/api/wallet/create', (req, res) => {
  const wallet = {
    address: '0x1234567890abcdef',
    encryptedPrivateKey: 'encrypted_dummy_key_123'
  };
  res.json(wallet);
});

app.post('/api/wallet/balance', (req, res) => {
  const { address } = req.body;
  res.json({ balance: '1.234' });
});

app.post('/api/wallet/send', (req, res) => {
  const { to, amount } = req.body;
  res.json({ txHash: '0xFAKE_TX_HASH_123456' });
});

app.post('/api/nfts', (req, res) => {
  res.json({
    nfts: [
      { name: 'Cool NFT #1', image: 'https://via.placeholder.com/150' },
      { name: 'Cool NFT #2', image: 'https://via.placeholder.com/150' }
    ]
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Binary Wallet Backend running on port ${PORT}`);
});
