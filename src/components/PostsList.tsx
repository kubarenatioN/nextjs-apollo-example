'use client'

import { gql } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

const GET_POSTS = gql`
  query BlogPosts {
    posts(first: 3) {
      nodes {
        title
        slug
        databaseId
      }
    }
  }
`

const PostsList = ({ pages }: { pages: any[] }) => {
  const { data } = useSuspenseQuery(GET_POSTS);
  
  console.log(data);
  console.log('pages:', pages);

  return <div>
    <h1>Posts</h1>
  </div>
}

export default PostsList