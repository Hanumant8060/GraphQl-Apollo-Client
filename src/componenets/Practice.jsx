import React from "react";
import { Mutation } from "react-apollo";
import {gql} from 'apollo-boost'

const GET = gql`
{
    vehicles 
    {
      id, 
      type, 
      modelCode,
      brandName
     }
}
`;

const DELETE = gql`
mutation deleteVehicle($id:Int!) {
    deleteVehicle(id:$id) {
        id
    }
  }
  `;

const DeleteTodo = ({id}) => {
  return (
    <Mutation
      mutation={DELETE}
      update={(cache, { data: { deleteVehicle } }) => {
        const { vehicles } = cache.readQuery({ query: GET });
        cache.writeQuery({
          query: GET,
          data: {vehicles: vehicles.filter(e => e.id !== id)}
        });
      }}
      >
      {(deleteVehicle, { data }) => (
        <button
          onClick={e => {
            deleteVehicle({
              variables: {
                id:8              }
            });
          }}
        >Delete</button>            
      )}
    </Mutation>
  );
};

export default DeleteTodo;