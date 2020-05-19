import React from 'react'
import { Component } from 'react';
import { Mutation } from 'react-apollo'
import {gql} from 'apollo-boost'
import {graphql} from 'react-apollo'
import AllCourses from './AllCourses';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button
} from 'reactstrap';



const POST_MUTATION = gql`
  mutation createVehicle($type: String!, $modelCode: String!,$brandName: String!) {
    createVehicle(type: $type, modelCode: $modelCode,brandName:$brandName) {
        type
        modelCode
        brandName
    }
  }
`
class CreateVehicle extends Component {
  state = {
    type: '',
    modelCode: '',
    brandName: ''
  }

  // DeleteVehicle = () => {
  //   this.props
  //     .mutate({
  //       refetchQueries: [{
  //         query: vehicles
  //       }],
  //       variables: {
  //         id: this.id
  //       },
  //     })
  //     .then(({ data }) => {
  //       console.log(' RESPONSE', data);
  //     })
  //     .catch(error => {
  //       console.log(' ERROR', error);
  //     });
  // }


  render() {
    const { type, modelCode, brandName } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">

          <input
            className="mb2"
            value={type}
            onChange={e => this.setState({ type: e.target.value })}
            type="text"
            placeholder="A type of vehicle"
          />
          <input
            className="mb2"
            value={brandName}
            onChange={e => this.setState({ brandName: e.target.value })}
            type="text"
            placeholder="The brand of vehicle"
          />
          <input
            className="mb2"
            value={modelCode}
            onChange={e => this.setState({ modelCode: e.target.value })}
            type="text"
            placeholder="A modelcode of vehicle"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ type, modelCode, brandName }}>
          {postMutation => <Button className="ml3" variant="dark" onClick={postMutation}>Submit</Button>}
        </Mutation>
        <div>
          <AllCourses {...this.state} />
        </div>
      </div>
    )
  }
}
export default CreateVehicle;