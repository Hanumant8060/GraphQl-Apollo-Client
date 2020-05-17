import React from 'react'
import gql from 'graphql-tag'
import getAllVehicles from './getAllVehicles';


const DELETE_MUTATION = gql`
mutation deleteVehicle($id:Int!) {
  deleteVehicle(id:$id) {
      id
  }
}
`
const DeleteVehicle = () => {
  let deleteVehicle = DELETE_MUTATION
  let { data } = getAllVehicles();

  if (!data || !data.vehicles) return null;

  return data.vehicles.map(vehicle => (
    <div>
      <h3>{vehicle.type}</h3>
      <p>{vehicle.brandName}</p>
      <button onClick={() => deleteVehicle({ variables: { id: vehicle.id } })}>
        Delete
        </button>
    </div>
  ))
}
export default DeleteVehicle;



