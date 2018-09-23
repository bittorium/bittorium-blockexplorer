// settings
const api = "http://95.216.187.3:34916";
const coinDifficultyTarget=175;
const symbol="BTOR";
const coinUnits=100;
const blockchainExplorer = "?hash={id}#block";
const transactionExplorer = "?hash={id}#transaction";

// poolList ["id","visible", "url", "api", "enabled"]
const poolList = [
    {"id":1,"visible":true,"url":"http://btor.simpool.xyz","api":"http://btor.simpool.xyz:4117","status":true,"flag":"US","loc":"USA"},
    {"id":2,"visible":true,"url":"http://youpool.io/BTOR","api":"http://118.178.122.224:8119","status":true,"flag":"FR","loc":"FRANCE"},
    {"id":3,"visible":true,"url":"https://miningpool.studio/","api":"https://miningpool.studio:8119","status":true,"flag":"NL","loc":"NETHERLAND"},



];
const seedsNodes = [
    {"id":"rbx","url":"http://95.216.187.3:34916"},
    {"id":"mtl","url":"http://95.216.187.3:34916"},
    {"id":"sdn","url":"http://95.216.187.3:34916"},
];
