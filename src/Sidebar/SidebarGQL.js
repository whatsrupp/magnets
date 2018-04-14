import gql from 'graphql-tag';

const getPostsQuery = gql`
query getPosts {
 posts{
    title,
    content,
    _id
 }
}
`

export default getPostsQuery