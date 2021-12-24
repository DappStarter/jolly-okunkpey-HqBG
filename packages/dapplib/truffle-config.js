require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture street remember stick sniff idea cloth equal giant'; 
let testAccounts = [
"0x99f2b0fc5ef2beeeba8478b86e96e29d45235127687daebb92d56be1ab8ca35a",
"0x4e79e33bebc6a5179795f4edc1d476fca23211e17e16135674759a359c4144e6",
"0xc8c067572150787d006967a3fbc4423ef53ca7dc982d5e54297a4f6340109654",
"0xf9db38471944321f2435bf06549640caa93eb731bdf44fbc4f01c4a1512d9c11",
"0xad4fb8ff2a1dcdbf5077e4e0290966b5be742a292ad89df6c3e6b9677d9c0727",
"0x66e87ef6cd9df9d50abf0be7cc77c5a8cdeb041a3587be6f961ea56fe2442bae",
"0x1c19a7bac94fb3d2b2c942495cabae9760c503fd7f6a461e6473653848004343",
"0x06a43d3d8f7412fefb385b38e7f8e392f1df8476c3f173a40b565b36eddf4366",
"0xe98fb163b6505ffb6c1c5a7179ce153a1834ea53be97ce63737f1edf71a7eaf7",
"0xd05289da77749e437f0b17241ab99db8250556d24c02f60beef2dd58b233295f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


