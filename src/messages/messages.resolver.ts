import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class MessagesResolver {
  // this is just for demonstration purposes
  // do NOT do this in real-life
  // this is meant as a substitute for a database
  messagesThatReallyShouldBeInADb = [
    { id: 0, description: 'The seed message' },
  ];

  @Query()
  messages() {
    return this.messagesThatReallyShouldBeInADb;
  }
}