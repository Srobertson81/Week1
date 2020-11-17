var itemPriceShirt = 15.00;
var itemPricePants = 25.00;

var moneyInWalletBefore = 130.50;
var moneyInWallet = 180;

var numberOfFriends = 175;
var numberOfLocalFriends = 35;

var avgAgeOfFriends = 35;
var myAge = 32;

var firstName = "Suse";
var firstNameMom = "Grace";

var lastName = "Snow";
var lastNameDad = "Green";

var middleInitial = "Z";
var middleInitialMom = "M";

var moneyInWalletAfter = moneyInWalletBefore - itemPriceShirt;
var friendsAvg = numberOfFriends / myAge;
var myName = firstName +" "+ middleInitial +" "+ lastName;

console.log('My name is: '+  myName);
console.log('Average friends per year: ' +  friendsAvg);
console.log('The ending balance in my wallet is: ' +  moneyInWalletAfter);