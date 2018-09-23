// settings
const api = "https://bittorium.org/Blockexplorer";
const coinDifficultyTarget=175;
const symbol="BTOR";
const coinUnits=180000000;
const blockchainExplorer = "?hash={id}#block";
const transactionExplorer = "?hash={id}#transaction";

// poolList ["id","visible", "url", "api", "enabled"]
const poolList = [
    {"id":1,"visible":true,"url":"http://btor.simpool.xyz","api":"http://btor.simpool.xyz:4224","status":true,"flag":"US","loc":"USA"},
    {"id":2,"visible":true,"url":"http://youpool.io/BTOR","api":"http://youpool.io/BTOR:3339","status":true,"flag":"FR","loc":"FRANCE"},
    {"id":3,"visible":true,"url":"https://miningpool.studio/","api":"https://miningpool.studio:3333","status":true,"flag":"NL","loc":"NETHERLAND"},



];
const seedsNodes = [
    {"id":"rbx","url":"http://95.216.187.3:34916/"},
    {"id":"mtl","url":"http://95.216.187.3:34916"},
    {"id":"sdn","url":"http://95.216.187.3:34916"},
];
