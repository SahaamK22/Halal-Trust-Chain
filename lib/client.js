// lib/client.js
const { createThirdwebClient } = require("thirdweb");
const { sepolia } = require("thirdweb/chains");

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
  secretKey: process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY
});

const activeChain = sepolia;

module.exports = {
  client,
  activeChain
};