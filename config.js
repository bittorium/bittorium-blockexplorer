// settings
const api = "https://explorer.bittorium.org/api";
const coinDifficultyTarget=240;
const symbol="BTOR";
const coinUnits=100;
const blockchainExplorer = "?hash={id}#block";
const transactionExplorer = "?hash={id}#transaction";

// poolList ["id","visible", "url", "api", "enabled"]
const poolList = [
    {"id":1,"visible":true,"url":"http://btor.simpool.xyz","api":"http://btor.simpool.xyz:4117","status":true,"flag":"US","loc":"USA"},
    {"id":2,"visible":true,"url":"http://youpool.io/BTOR","api":"http://118.178.122.224:8119","status":true,"flag":"FR","loc":"FRANCE"},
    {"id":3,"visible":true,"url":"https://miningpool.studio","api":"https://miningpool.studio:8119","status":true,"flag":"NL","loc":"NETHERLAND"},
    {"id":4,"visible":true,"url":"https://poolmining.us","api":"https://poolmining.us:8119","status":true,"flag":"FR","loc":"FRANCE"},



];
const seedsNodes = [
    {"id":"btor2","url":"https://explorer.bittorium.org/api"},
    {"id":"btor1","url":"https://explorer.bittorium.org/seed1"},
];
