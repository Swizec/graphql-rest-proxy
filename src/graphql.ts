import { ApolloServer, gql } from "apollo-server-lambda";
import { APIwrapper } from "./APIwrapper";
import { userSchema } from "./schema/User";
import { settingsSchema } from "./schema/Settings";

// this is where we define the shape of our API
const rootSchema = gql`
    type Query {
        user: User
        settings: Settings
    }
`;

const typeDefs = [rootSchema, userSchema, settingsSchema];

const API = new APIwrapper();

// this is where the shape maps to functions
const resolvers = {
    Query: {
        user: async () => {
            await API.login();
            return API.getUser();
        },
        settings: async () => {
            await API.login();
            return API.settings();
        }
    }
    // Mutation: {}
};

const server = new ApolloServer({ typeDefs, resolvers });

export const handler = server.createHandler({
    cors: {
        origin: "*", // for security in production, lock this to your real endpoints
        credentials: true
    }
});
