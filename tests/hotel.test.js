global.TextEncoder = require("util").TextEncoder;
//import { users } from '../src/models/userModel';

import 'cross-fetch/polyfill'
import AplloBoost, {gql} from 'apollo-boost'


const client = new AplloBoost({
    uri:'http://localhost:4000'
})

test('Should create a new user', async () => {
    console.log('inside test');
    const createUser = gql`
    mutation {
        createUser(
            data: {
                email: "newEmail@abc.com",
                password: "qazwsx"
            }
        ) {
            email
        }
    }
    `

    const response =  await   client.mutate({
        mutation: createUser
    })
})


test('Should give amenities details', async () => {
    const amenities = gql`
        query {
  amenities {
    id
    hotelId
  }
}
`
    const response = await client.query({ query: amenities })

    console.log(response);
    expect(response.data.amenities.length).toBe(7)
})

jest.setTimeout(30000);