# Private Blockchain Application

This project is for educational purpose @Udemy Blockchain developer Nanodegree.
The purpose of this project is to show that i am familiar with the fundamentals concepts 
of a Blockchain platform. 

The project started with boilerplate code from @Udacity - jose.morales@udacity.com 
  - Express REST Api was already setup to expose some of the functionalities

## The problem i have to solve:

Your employer is trying to make a test of concept on how a Blockchain application can be implemented in his company.
He is an astronomy fans and he spend most of his free time on searching stars in the sky, that's why he would like
to create a test application that will allows him to register stars, and also some others of his friends can register stars
too but making sure the application know who owned each star.

### What is the process described by the employer to be implemented in the application?

1. The application will create a Genesis Block when we run the application.
2. The user will request the application to send a message to be signed using a Wallet and in this way verify the ownership over the wallet address. The message format will be: `<WALLET_ADRESS>:${new Date().getTime().toString().slice(0,-3)}:starRegistry`;
3. Once the user have the message the user can use a Wallet to sign the message.
4. The user will try to submit the Star object for that it will submit: `wallet address`, `message`, `signature` and the `star` object with the star information.
    The Start information will be formed in this format:
    ```json
        "star": {
            "dec": "68° 52' 56.9",
            "ra": "16h 29m 1.0s",
            "story": "Testing the story 4"
		}
    ```
5. The application will verify if the time elapsed from the request ownership (the time is contained in the message) and the time when you submit the star is less than 5 minutes.
6. If everything is okay the star information will be stored in the block and added to the `chain`
7. The application will allow us to retrieve the Star objects belong to an owner (wallet address). 


## What tools or technologies i used to create this application?

- This application will be created using Node.js and Javascript programming language. The architecture will use ES6 classes
because it will help to organize the code and facilitate the maintenance of the code.
- Some of the libraries or npm modules i use are:
    - "bitcoinjs-lib": "^4.0.3",
    - "bitcoinjs-message": "^2.0.0",
    - "body-parser": "^1.18.3",
    - "crypto-js": "^3.1.9-1",
    - "express": "^4.16.4",
    - "hex2ascii": "0.0.3",
    - "morgan": "^1.9.1"

## How to run the application:

```
npm install
node app.js
```
        
## How to test application functionalities?

2. To make sure your application is working fine and it creates the Genesis Block you can use POSTMAN to request the Genesis block:
    ![Request: http://localhost:8000/block/0 ](images_from_test/firstrequest.PNG?raw=true)
3. Make your first request of ownership sending your wallet address:
    ![Request: http://localhost:8000/requestValidation ](images_from_test/requestValidation.PNG?raw=true)
4. Sign the message with your Wallet:
    ![Use the Wallet to sign a message](images_from_test/signMessage.PNG?raw=true)
5. Submit your Star
     ![Request: http://localhost:8000/submitstar](images_from_test/submitStars.PNG?raw=true)
6. Retrieve Stars owned by me
    ![Request: http://localhost:8000/blocks/<WALLET_ADDRESS>](images_from_test/retrieveStars.PNG?raw=true)