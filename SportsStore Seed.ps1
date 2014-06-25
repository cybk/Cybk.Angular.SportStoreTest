$mongodbDrivePath  = 'C:\Test\AngularJS\SportsStore\mongoDb'

Add-Type -Path "$($mongodbDrivePath)\MongoDB.Bson.dll"

Add-Type -Path "$($mongodbDrivePath)\MongoDB.Driver.dll"    


$db = [MongoDB.Driver.MongoDatabase]::Create('mongodb://localhost:27017/SportsStore?safe=true;slaveok=true');

[MongoDB.Driver.MongoServer]::GetAllServers().BuildInfo;

$collection = $db["Products"]


[MongoDB.Bson.BsonDocument] $doc = @{
    "_id" = [MongoDB.Bson.ObjectId]::GenerateNewID();
    "Category" = "Watersports";
    "Description" = "A boat for one person";
    "Name" = "Kayak";
    "Price" = "275";
};
$Collection.Insert($doc)


[MongoDB.Bson.BsonDocument] $doc = @{
    "_id" = [MongoDB.Bson.ObjectId]::GenerateNewID();
    "Category" = "Watersports";
    "Description" = "Protective and faschionable";
    "Name" = "Lifejacket";
    "Price" = "48.95";
};
$Collection.Insert($doc)

[MongoDB.Bson.BsonDocument] $doc = @{
    "_id" = [MongoDB.Bson.ObjectId]::GenerateNewID();
    "Category" = "Soccer";
    "Description" = "FIFA-approved size and weight";
    "Name" = "Soccer Ball";
    "Price" = "19.5";
};
$Collection.Insert($doc)

[MongoDB.Bson.BsonDocument] $doc = @{
    "_id" = [MongoDB.Bson.ObjectId]::GenerateNewID();
    "Category" = "Soccer";
    "Description" = "Give your playing field a professional touch";
    "Name" = "Corner Flags";
    "Price" = "34.95";
};
$Collection.Insert($doc)

[MongoDB.Bson.BsonDocument] $doc = @{
    "_id" = [MongoDB.Bson.ObjectId]::GenerateNewID();
    "Category" = "Soccer";
    "Description" = "Flat-packed 35,000-seat Stadium";
    "Name" = "Stadium";
    "Price" = "275";
};
$Collection.Insert($doc)

[MongoDB.Bson.BsonDocument] $doc = @{
    "_id" = [MongoDB.Bson.ObjectId]::GenerateNewID();
    "Category" = "Chess";
    "Description" = "Swcretly give your opponent a disadvantage";
    "Name" = "Thinking Cap";
    "Price" = "29.95";
};
$Collection.Insert($doc)

[MongoDB.Bson.BsonDocument] $doc = @{
    "_id" = [MongoDB.Bson.ObjectId]::GenerateNewID();
    "Category" = "Chess";
    "Description" = "A fun game for the family";
    "Name" = "Human Chess Board";
    "Price" = "75";
};
$Collection.Insert($doc)
[MongoDB.Bson.BsonDocument] $doc = @{
    "_id" = [MongoDB.Bson.ObjectId]::GenerateNewID();
    "Category" = "Chess";
    "Description" = "Gold-plated, diamond-studded king";
    "Name" = "Bling Bling king";
    "Price" = "1200";
};
$Collection.Insert($doc)



$collection.FindAll()