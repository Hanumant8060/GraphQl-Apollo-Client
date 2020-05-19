import React from 'react'
import { Component } from 'react';
import { Form, Card, Button } from 'reactstrap';
import '../styles/style.css'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const POST_MUTATION = gql`
  mutation updateInfo($id: Int! ,$type: String!, $modelCode: String!, $brandName: String) {
    updateInfo(id: $id ,type: $type, modelCode: $modelCode,brandName:$brandName) {
        id
        type
        modelCode
        brandName
    }
  }
`

class UpdateInfo extends Component {

    state = {
        id: '',
        type: '',
        modelCode: '',
        brandName: ''
    }

    render() {
        const { id, type, modelCode, brandName } = this.state
        return (
            <div>
              <Card className="card">
            <div className="flex flex-column mt3">
              <div className="main">
            <input style={{width:"300px"}}
                className="mb2"
                value={id}
                onChange={e => this.setState({ id: e.target.value })}
                type="text"
                placeholder="A id of vehicle"
              />
              </div>
              <div className="main">
              <input style={{width:"300px"}}
                className="mb2"
                value={type}
                onChange={e => this.setState({ type: e.target.value })}
                type="text"
                placeholder="A type of vehicle"
              />
              </div>
              <div className="main">
              <input style={{width:"300px"}}
                className="mb2"
                value={brandName}
                onChange={e => this.setState({ brandName: e.target.value })}
                type="text"
                placeholder="The brand of vehicle"
              /></div>
              <div className="main">
              <input style={{width:"300px"}}
                className="mb2"
                value={modelCode}
                onChange={e => this.setState({ modelCode: e.target.value })}
                type="text"
                placeholder="A modelcode of vehicle"
              />
              </div>
            </div>
            <Mutation mutation={POST_MUTATION} variables={{id, type, modelCode, brandName }}>
          {postMutation => <Button className="ml3" variant="dark" onClick={postMutation}>Update</Button>}
        </Mutation>
        {/* <Button style={{width:"200px",marginLeft:"130px"}}>Update</Button> */}
            </Card>
            </div>
           
          
      
    )
    }
}
export default UpdateInfo;