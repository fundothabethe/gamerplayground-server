/* eslint-disable */
// this is an auto generated file. This will be overwritten

const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
      id
      name
      readers {
        items {
          id
          status
          position
          entrance_type
          store_id
          location {
            items {
              id
              latitude
              longitude
              reader_id
              createdAt
              updatedAt
            }
            nextToken
          }
          beacons {
            items {
              id
              mac
              status
              signal_strength
              reader_id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
      id
      name
      readers {
        items {
          id
          status
          position
          entrance_type
          store_id
          location {
            items {
              id
              latitude
              longitude
              reader_id
              createdAt
              updatedAt
            }
            nextToken
          }
          beacons {
            items {
              id
              mac
              status
              signal_strength
              reader_id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
const update_store_name = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
      id
      name
      readers {
        items {
          id
          status
          position
          entrance_type
          store_id
          location {
            items {
              id
              latitude
              longitude
              reader_id
              createdAt
              updatedAt
            }
            nextToken
          }
          beacons {
            items {
              id
              mac
              status
              signal_strength
              reader_id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
const createReaders = /* GraphQL */ `
  mutation CreateReaders(
    $input: CreateReadersInput!
    $condition: ModelReadersConditionInput
  ) {
    createReaders(input: $input, condition: $condition) {
      id
      status
      position
      entrance_type
      store_id
      location {
        items {
          id
          latitude
          longitude
          reader_id
          createdAt
          updatedAt
        }
        nextToken
      }
      beacons {
        items {
          id
          mac
          status
          signal_strength
          reader_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
const updateReaders = /* GraphQL */ `
  mutation UpdateReaders(
    $input: UpdateReadersInput!
    $condition: ModelReadersConditionInput
  ) {
    updateReaders(input: $input, condition: $condition) {
      id
      status
      position
      entrance_type
      store_id
      location {
        items {
          id
          latitude
          longitude
          reader_id
          createdAt
          updatedAt
        }
        nextToken
      }
      beacons {
        items {
          id
          mac
          status
          signal_strength
          reader_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
const deleteReaders = /* GraphQL */ `
  mutation DeleteReaders(
    $input: DeleteReadersInput!
    $condition: ModelReadersConditionInput
  ) {
    deleteReaders(input: $input, condition: $condition) {
      id
      status
      position
      entrance_type
      store_id
      location {
        items {
          id
          latitude
          longitude
          reader_id
          createdAt
          updatedAt
        }
        nextToken
      }
      beacons {
        items {
          id
          mac
          status
          signal_strength
          reader_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
const createBeacon = /* GraphQL */ `
  mutation CreateBeacon(
    $input: CreateBeaconInput!
    $condition: ModelBeaconConditionInput
  ) {
    createBeacon(input: $input, condition: $condition) {
      id
      mac
      status
      signal_strength
      reader_id
      createdAt
      updatedAt
    }
  }
`;
const updateBeacon = /* GraphQL */ `
  mutation UpdateBeacon(
    $input: UpdateBeaconInput!
    $condition: ModelBeaconConditionInput
  ) {
    updateBeacon(input: $input, condition: $condition) {
      id
      mac
      status
      signal_strength
      reader_id
      createdAt
      updatedAt
    }
  }
`;
const deleteBeacon = /* GraphQL */ `
  mutation DeleteBeacon(
    $input: DeleteBeaconInput!
    $condition: ModelBeaconConditionInput
  ) {
    deleteBeacon(input: $input, condition: $condition) {
      id
      mac
      status
      signal_strength
      reader_id
      createdAt
      updatedAt
    }
  }
`;
const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      latitude
      longitude
      reader_id
      createdAt
      updatedAt
    }
  }
`;
const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      latitude
      longitude
      reader_id
      createdAt
      updatedAt
    }
  }
`;
const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      latitude
      longitude
      reader_id
      createdAt
      updatedAt
    }
  }
`;

module.exports = {
  update_store_name,
};
