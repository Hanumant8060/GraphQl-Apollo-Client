import gql from 'graphql-tag'

const getVehicles = gql`
{
    vehicles 
    {
      id, 
      type, 
      modelCode,
      brandName
     }
}
`
export {getVehicles};