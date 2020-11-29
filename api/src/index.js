const fetch = require("node-fetch");
const { ApolloServer, gql } = require("apollo-server");


const typeDefs = gql`
  type Image {
    id: ID
    tags: String
    largeImageURL: String
    user: String
    userImageURL: String
    views: Int
  }

  type Query {
    results(keyword:String): [Image]
    image(id: ID!): Image
    images(page: Int, category: String, keyword:String): [Image]
  }
`;


function fetchImages(page, category, keyword) {
  // More info about the fetch function? https://github.com/bitinn/node-fetch#json
  const response = encodeURI(keyword)
  return fetch(`https://pixabay.com/api/?key=14217170-67091f69280d11e8fd820524a&category=${category}&page=${page}&per_page=30&q=${response}`)
    .then(res => res.json())
    .then(json => json.hits);
}

function fetchImageById(id) {
  // More info about the fetch function? https://github.com/bitinn/node-fetch#json
  return fetch(`https://pixabay.com/api/?key=14217170-67091f69280d11e8fd820524a&id=${id}`)
    .then(res => res.json())
    .then(json => json.hits[0]);
}

function fetchImagesByName(keyword) {
  return fetch(`https://pixabay.com/api/?key=14217170-67091f69280d11e8fd820524a&q=${keyword}`)
    .then(res => res.json())
    .then(json => json.hits);
}

const resolvers = {
  Query: {
    images: (_, args) => {
      const page = args.page
      const category = args.category
      const keyword = args.keyword
      console.log(category);
      console.log(page);
      console.log(keyword)
      return fetchImages(page, category, keyword)
    },
    image:(_, args) => {
      const id = args.id
      console.log(id)
      return fetchImageById(id)
    },
    results:(_, args) =>{
      const keyword = args.keyword
      console.log(keyword)
      return fetchImagesByName(keyword)
    }
  }
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

