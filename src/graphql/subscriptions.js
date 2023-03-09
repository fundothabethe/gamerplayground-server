/* eslint-disable */
// this is an auto generated file. This will be overwritten

const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
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
const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
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

const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
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
const onCreateReaders = /* GraphQL */ `
  subscription OnCreateReaders($filter: ModelSubscriptionReadersFilterInput) {
    onCreateReaders(filter: $filter) {
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
const onUpdateReaders = /* GraphQL */ `
  subscription OnUpdateReaders($filter: ModelSubscriptionReadersFilterInput) {
    onUpdateReaders(filter: $filter) {
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
const onDeleteReaders = /* GraphQL */ `
  subscription OnDeleteReaders($filter: ModelSubscriptionReadersFilterInput) {
    onDeleteReaders(filter: $filter) {
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
const onCreateBeacon = /* GraphQL */ `
  subscription OnCreateBeacon($filter: ModelSubscriptionBeaconFilterInput) {
    onCreateBeacon(filter: $filter) {
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
const onUpdateBeacon = /* GraphQL */ `
  subscription OnUpdateBeacon($filter: ModelSubscriptionBeaconFilterInput) {
    onUpdateBeacon(filter: $filter) {
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
const onDeleteBeacon = /* GraphQL */ `
  subscription OnDeleteBeacon($filter: ModelSubscriptionBeaconFilterInput) {
    onDeleteBeacon(filter: $filter) {
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
const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
      id
      latitude
      longitude
      reader_id
      createdAt
      updatedAt
    }
  }
`;
const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
      id
      latitude
      longitude
      reader_id
      createdAt
      updatedAt
    }
  }
`;
const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
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
  onUpdateStore,
};
