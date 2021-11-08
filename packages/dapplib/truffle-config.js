require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note shift protect half kite sun genius'; 
let testAccounts = [
"0xde8345bbf46b020f3ffb0bee9a846cc097603c1f765510ab334e3b88a13287a0",
"0x0fbc0fc1e37e0735d21241991364812887dd14d06d06f895fb7f70efd6d460b3",
"0x92840b594964491f413ac183bda318d14d08f7739faf3d60526be9f6a2d5c4f1",
"0x9997dbe77453d55d5f1d983044f2b8c3bdd572fd1f6469b85731be78e6ad663a",
"0x6dceec7c916f9cf6ef530836ccfab6ff49dd2d4002618b8d9f8b8e4c94225737",
"0x0ae6cf7d781d69b4f957e2f08b5a34077a8f9d0a0d5f26e660ec8b1d579358e3",
"0x60637d564e21e7b3c2107831be02f8ee648c2cca32a625f4be18df62d65753a3",
"0x1fee27c36929b04c395be419f6a1b76b22636a5d94e676d127940ce3d5beeade",
"0x57fcfef30f0f50ba4843fd8239a09c556f317b3f1699a04f0513feab5d91836b",
"0x849e4aa4be937d3789c5bccfa7a8f71d29f2ddb13c285150b342606fd28dde99"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

