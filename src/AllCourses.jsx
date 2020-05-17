/* eslint-disable*/
import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Card, CardBody, CardTitle, Button } from 'reactstrap';

const POST_MUTATION = gql`
mutation deleteVehicle($id:Int!) {
  deleteVehicle(id:$id) {
      id
  }
}
`
const AllCourses = (props) => (
  <Query query={gql`
    {
        vehicles 
        {
          id, 
          type, 
          modelCode,
          brandName
         }
    }
  ` }>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error:(</p>;
      return data.vehicles.map(({ id, type, modelCode, brandName, }) =>
        (
          <div>
            <Card color="fade">
              <CardBody>
                <div key={id}>
                  <CardTitle className="h3 mb-1 pt-2 font-weight-bold">{` name of vehicle   ==>${brandName}  model  ${modelCode}`}</CardTitle>
                </div>
              </CardBody>
              <Mutation mutation={POST_MUTATION} variables={{ id, type, modelCode, brandName }}>
                {postMutation => <Button className="ml3" variant="dark" onClick={postMutation}>DELETE</Button>}
              </Mutation>
            </Card>
          </div>
        ));
    }
    }

  </Query>

);
export default AllCourses;