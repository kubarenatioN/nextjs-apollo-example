import PostsList from '@/components/PostsList'
import { getClient } from '@/lib/apollo/client'
import { gql } from '@apollo/client'
import { FC } from 'react'

const GET_PAGES = gql`
  query GetPages($limit: Int!) {
    pages(first: $limit) {
      nodes {
        title
        slug
        databaseId
      }
    }
  }
`

interface pageProps {
  
}

const page: FC<pageProps> = async ({}) => {
  const { data } = await getClient().query({
    query: GET_PAGES,
    variables: {
      limit: 2
    }
  })

  const { pages } = data

  console.log('server', pages);

  return <div>
    <PostsList pages={pages} />
  </div>
}

export default page