/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
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
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getReaders = /* GraphQL */ `
  query GetReaders($id: ID!) {
    getReaders(id: $id) {
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
export const listReaders = /* GraphQL */ `
  query ListReaders(
    $filter: ModelReadersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReaders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getBeacon = /* GraphQL */ `
  query GetBeacon($id: ID!) {
    getBeacon(id: $id) {
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
export const listBeacons = /* GraphQL */ `
  query ListBeacons(
    $filter: ModelBeaconFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeacons(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      latitude
      longitude
      reader_id
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const readersByStore_id = /* GraphQL */ `
  query ReadersByStore_id(
    $store_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReadersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    readersByStore_id(
      store_id: $store_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const beaconsByReader_id = /* GraphQL */ `
  query BeaconsByReader_id(
    $reader_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBeaconFilterInput
    $limit: Int
    $nextToken: String
  ) {
    beaconsByReader_id(
      reader_id: $reader_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const locationsByReader_id = /* GraphQL */ `
  query LocationsByReader_id(
    $reader_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    locationsByReader_id(
      reader_id: $reader_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
