-- NOSQL
-- select
db.collection.find()
-- insert 
db.collection.insertOne()
db.collection.insertMany([
    { key1: value, key1a: value, {key1a1: value, key1a2: value}, x: value }
    { key2: value, key2a: value, {key2a1: value, key2a2: value}, x: value }
    { key3: value, key2a: value, {key3a1: value, key3a3: value}, x: value },
]);
