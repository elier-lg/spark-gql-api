import { handlerPath } from '@libs/handlerResolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.graphqlHandler`,
  events: [
    {
      http: {
        method: 'any',
        path: 'graphql',
        cors: true
      }
    }
  ]
}
