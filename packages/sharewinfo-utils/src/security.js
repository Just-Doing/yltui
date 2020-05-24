const { JSEncrypt } = require('jsencrypt');

export function rsaEncrypt(input, publicKey) {
  var encrypt = new JSEncrypt();
  encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + publicKey + '-----END PUBLIC KEY-----');
  var encrypted = encrypt.encrypt(input);
  return encrypted;
}

export function rsaDecode(input, privateKey) {
  var decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privateKey);
  var uncrypted = decrypt.decrypt(input);
  return uncrypted;
}
