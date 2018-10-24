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

      // db.collection("Todos")
      //   .find({ _id: new ObjectID("5bd0572f3576cc6ea0aa7fde") })
      //   .toArray()
      //   .then(
      //     docs => {
      //       console.log("Todos");
      //       console.log(JSON.stringify(docs, undefined, 2));
      //     },
      //     err => {
      //       console.log("Unable to fetch todos", err);
      //     }
      //   );

      db.collection("Todos")
        .find()
        .count()
        .then(
          count => {
            console.log(`Todos count: ${count}`);
            // console.log(JSON.stringify(docs, undefined, 2));
          },
          err => {
            console.log("Unable to fetch todos", err);
          }
        );

      //client.close();
    }
  }
);
