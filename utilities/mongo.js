import { MongoClient, ServerApiVersion } from "mongodb";

if(!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is Invalid/Missing");
}

const uri = process.env.MONGO_URI;
const options = {
    serverAPI: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    },
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
    let globalWithMongo = global;
    globalWithMongo._mongoClientPromise = undefined;

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
        // globalWithMongo._mongoClientPromise = MongoClient.connect(uri, options);
    }
    
    clientPromise = globalWithMongo._mongoClientPromise;

}   else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;