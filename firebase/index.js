
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbKeyServiceAccount.json");
//remember create folder config and inside the key that firebase gave to us!

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ecommerce-auth-egg.firebaseio.com"
});
