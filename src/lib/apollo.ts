import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4qc8yn93pd401xtdn57hlgw/master",
    cache: new InMemoryCache()
});