import React, {useState} from 'react';

// import { graphql } from 'react-apollo'
import { useQuery, gql } from '@apollo/client';

// import { ApolloProvider, Query } from 'react-apollo'

const GET_IMAGES = gql`
       {
            images{
            title
            id
            tags
            largeImageURL
        }
    }
    
`


export const Images = () => {
    const[state, setState] = useState([])
    const { loading, error, data } = useQuery(GET_IMAGES)

    if (loading) return <p>loading..</p>
    if (error) return <p>Error.</p>


    console.log(data)

    return ( 
        <div>
            {
                data.images.map(image =>
                    <p>{image.id}</p>
                  )
            }
        </div>
        )
      
}
