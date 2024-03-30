# MongoDb
- [MongoDb](#mongodb)
  - [Beschrijving](#beschrijving)
  - [Useful querries](#useful-querries)
    - [Look up something](#look-up-something)
    - [Add/Change fields to a document](#addchange-fields-to-a-document)
    - [Remove fields to a document](#remove-fields-to-a-document)
    - [Delete documents (example migration)](#delete-documents-example-migration)

## Beschrijving
MongoDb is een document gebaseerde databank. 
Er gebeurt dus geen validitie over wat in welke datum kan gezet worden 

## Useful querries
### Look up something 

find collection
```js
db.contract.find({}) 
```

find something specific

```js
db.contract.find({'contractNumber':191186}) 
db.getCollection('contract').find({'contractNumber':191186}) 
db.contract.find({'partyIdentificationNumber':"00001151690"}) 
```
Find more than one item
```js
db.contract.find({'contractNumber': {$in: [801076, 890507, 897643]}}) 
db.contract.find({'partyIdentificationNumber': {$in: [ 
"00001151690", 
"00001152560", 
"00001015157", 
"00001020316", 
"00551811920" 
]}}) 
```

count documents

```js
db.contract.distinct('contractNumber'); 
db.contract.distinct('partyIdentificationNumber'); 
```

Complex form filter one which fields
```js
db.contract.find({'contractNumber': {$in: [801076, 194299, 897643, 898962, 899350, 91580]},  
"contractStatusCode":{$ne : "50"}}, { contractNumber: 1, partyIdentificationNumber: 1, contractStatusCode: 1, version: 1}) 
```
### Add/Change fields to a document    

```js
var oldContractNumber=00000; 
var newContractNumber=00000; 

db.getCollection('contract').updateOne({'contractNumber': oldContractNumber }, 
{ 
  $set: { 
    'contractNumber': NumberLong(newContractNumber),
    'validityStartDate': ISODate("2039-12-31T23:00:00.000+0000") 
  } 
}) 
```

### Remove fields to a document    
[info for unset](https://database.guide/how-to-remove-a-field-from-a-mongodb-document-unset/)

```js
var oldContractNumber=00000; 

db.getCollection('contract').updateOne({'contractNumber': oldContractNumber }, 
{ 
  $unset: { 
    'contractNumber': NumberLong(newContractNumber) 
  } 
}) 
```
### Delete documents (example migration)

```js
var contractNumberToDelete=10000019;
var partyId=x;

db.contract.find({'contractNumber': contractNumberToDelete}) 
db.documentsOverview.find({"contractNumber":contractNumberToDelete}) 
db.bankAgreements.find({"partyIdentificationNumber":partyId}) 
db.bankInformation.find({"partyIdentificationNumber":partyId}) 
```

```js
var contractNumberToDelete=10000019;
var partyId=x;

db.contract.deleteOne({"contractNumber":contractNumberToDelete}) 
db.documentsOverview.deleteOne({"contractNumber":contractNumberToDelete}) 
db.bankAgreements.deleteOne({"partyIdentificationNumber":partyId}) 
db.bankInformation.deleteOne({"partyIdentificationNumber":partyId}) 
```

```js
var contractNumberToDelete=10000019;
var partyId=x;

db.contract.find({"contractNumber":contractNr}) 
db.documentsOverview.find({"contractNumber":contractNr}) 
db.bankAgreements.find({"partyIdentificationNumber":partyId}) 
db.bankInformation.find({"partyIdentificationNumber":partyId}) 
```
 

