import { gql } from '@apollo/client'

export const GET_SONGS = gql`
  query getSongs {
    songs(order_by: { created_at: desc }) {
      author
      duration
      id
      thumbnail
      title
      url
    }
  }
`
