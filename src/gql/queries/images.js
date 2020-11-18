import { gql } from '@apollo/client'

export const GET_IMAGES = gql`
       query getImages($page: Int, $category:String){
            images(page: $page, category: $category){
            id
            tags
            largeImageURL
            user
            userImageURL
            views
        }
    }
    
`

