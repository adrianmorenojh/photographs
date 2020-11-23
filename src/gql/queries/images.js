import { gql } from '@apollo/client'

export const GET_IMAGES = gql`
    query getImages($page: Int, $category:String){
        images(page: $page, category: $category){
            id
            largeImageURL  
        }
    }
    
`

export const GET_IMAGE = gql`
query getImage($id: ID!){
    image(id: $id){
        id
        tags
        largeImageURL
        user
        userImageURL
        views
    }
}
`


