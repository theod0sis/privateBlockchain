/**
 *                          Block class
 *  The Block class is a main component into any Blockchain platform,
 *  it will store the data and act as a dataset for your application.
 *  The class will expose a method to validate the data... The body of
 *  the block will contain an Object that contain the data to be stored,
 *  the data should be stored encoded.
 *  All the exposed methods should return a Promise to allow all the methods
 *  run asynchronous.
 */

const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');

class Block {

    // Constructor - argument data will be the object containing the transaction data
    constructor(data) {
        this.hash = null;                                           // Hash of the block
        this.height = 0;                                            // Block Height (consecutive number of each block)
        this.body = Buffer(JSON.stringify(data)).toString('hex');   // Will contain the transactions stored in the block, by default it will encode the data
        this.time = 0;                                              // Timestamp for the Block creation
        this.previousBlockHash = null;                              // Reference to the previous Block Hash
    }

    /**
     *  validate() method will validate if the block has been tampered or not.
     *  Been tampered means that someone from outside the application tried to change
     *  values in the block data as a consequence the hash of the block should be different.
     *
     */
    validate() {
        let self = this;
        return new Promise((resolve, reject) => {
            let currentBlockHash = self.hash;
            self.hash = null;
            let newHash = SHA256(JSON.stringify(self)).toString();
            self.hash = currentBlockHash;
            resolve(newHash=== currentBlockHash);
        });
    }

    /**
     *  Auxiliary Method to return the block body (decoding the data)
     *  Resolve with the data and make sure that you don't need to return the data for the `genesis block`
     *  or Reject with an error.
     */
    getBData() {
        let parsedData = JSON.parse(hex2ascii(this.body));
        if (parsedData.data === "Genesis Block") {
            return;
        }
        return (parsedData);
    }

}

// Exposing the Block class as a module
module.exports.Block = Block;