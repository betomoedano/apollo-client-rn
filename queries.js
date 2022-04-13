import { gql } from "@apollo/client";

export const AUTHOR_NAMES = gql`
    query ExampleQuery {
      posts {
        id
        title
        description
        author
        image
        likes
        createdAt
      }
    }
`;