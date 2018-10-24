// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  function(err, client) {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to MongoDB");
      const db = client.db("TodoApp");

      // db.collection("Users").insertOne(
      //   {
      //     age: 25,
      //     location: "Australia"
      //   },
      //   (err, result) => {
      //     if (err) {
      //       return console.log("Unable to insert todo", err);
      //     }
      //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
      //   }
      // );

      client.close();
    }
  }
);
