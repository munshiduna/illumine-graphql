import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

const startServer = async () => {
	const app = express();

	const server = new ApolloServer({
		modules: [
			require('./modules/server'),
			require('./modules/user'),
		]
	});

	await mongoose.connect("mongodb://localhost:27017/illumine", {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	server.applyMiddleware({ app });

	app.listen({ port: 4000 }, () =>
		console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
	);
};

startServer();