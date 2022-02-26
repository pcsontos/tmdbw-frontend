import {gql} from "graphql-tag"

export const SEARCH_MOVIES = gql`
  query SearchMovies($query: String!) {
    searchMovies(query: $query) {
      id
      name
      overview
      releaseDate
      cast {
        id
        person {
          name
        }
        role {
          ... on Cast {
            character
          }
        }
      }
    }
  }
`