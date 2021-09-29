import { ApolloServer, IResolvers } from 'apollo-server-express';
import mongoose from 'mongoose';

import resolvers from 'src/resolvers';
import typeDefs from 'src/typeDefs';
import { expressApi as app } from 'src/services';

import PATHS from 'config/paths';
import { config } from 'dotenv';
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
config({ path: PATHS.envFiles[mode] });
import ENV from 'config/env';

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers as IResolvers,
    ...ENV.apollo,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: ENV.port }, () => {
    const { graphqlPath, subscriptionsPath } = server;
    console.log('🚀 Server ready at http://%s%s', ENV.domain, graphqlPath);
    console.log('🚀 Subscriptions ready at ws://%s%s', ENV.domain, subscriptionsPath);
    mongoose.Schema.Types.String.set('trim', true);
    mongoose.set('returnOriginal', false);
    mongoose
      .connect(ENV.mongoConnect, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .then(() => console.log('🚀 Mongo DataBase Connected Successfully !'))
      .catch((err) => {
        throw new Error(err);
      });
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.stop());
  }
}

startApolloServer();
