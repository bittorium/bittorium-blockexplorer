// settings
const api = "https://explorer.raasu.org/api";
const coinDifficultyTarget=240;
const symbol="BTOR";
const coinUnits=100;
const blockchainExplorer = "?hash={id}#block";
const transactionExplorer = "?hash={id}#transaction";

// poolList ["id","visible", "url", "api", "enabled"]
const poolList = [
    {"id":1,"visible":true,"url":"https://poolmining.be","api":"https://poolmining.be:8119","status":true,"flag":"FR","loc":"FRANCE"},
    {"id":2,"visible":true,"url":"https://pool.raasu.org","api":"https://pool.raasu.org:8119","status":true,"flag":"FI","loc":"FINLAND"},
];
const seedsNodes = [
    {"id":"btor2","url":"https://explorer.raasu.org/api"},
    {"id":"btor1","url":"https://poolmining.be/api"},
];
