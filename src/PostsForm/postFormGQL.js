import gql from 'graphql-tag';

export const createPostMutation = gql`
    mutation createPostMutation($title: String!, $content: String!) {
        createPost(title: $title, content: $content){
            _id
            title
            content
        }
    }
`
const getPostsQuery = gql`query TodoAppQuery {
    posts{
       title,
       content,
       _id
    }
   }`

const updateFunction = (cache, {data:{ createPost}})=>{
    const data = cache.readQuery({query: getPostsQuery})
    data.posts.push(createPost)
    cache.writeQuery({ query: getPostsQuery, data })
};

export const createPostOptions = {
    options: {
        update: updateFunction
    }
}