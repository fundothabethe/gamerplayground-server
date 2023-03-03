/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStoreInput = {
  id?: string | null,
  name: string,
};

export type ModelStoreConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Store = {
  __typename: "Store",
  id: string,
  name: string,
  readers?: ModelReadersConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelReadersConnection = {
  __typename: "ModelReadersConnection",
  items:  Array<Readers | null >,
  nextToken?: string | null,
};

export type Readers = {
  __typename: "Readers",
  id: string,
  status: string,
  position: string,
  entrance_type?: string | null,
  store_id: string,
  location?: ModelLocationConnection | null,
  beacons?: ModelBeaconConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items:  Array<Location | null >,
  nextToken?: string | null,
};

export type Location = {
  __typename: "Location",
  id: string,
  latitude: number,
  longitude: number,
  reader_id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelBeaconConnection = {
  __typename: "ModelBeaconConnection",
  items:  Array<Beacon | null >,
  nextToken?: string | null,
};

export type Beacon = {
  __typename: "Beacon",
  id: string,
  mac: string,
  status: string,
  signal_strength: number,
  reader_id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStoreInput = {
  id: string,
  name?: string | null,
};

export type DeleteStoreInput = {
  id: string,
};

export type CreateReadersInput = {
  id?: string | null,
  status: string,
  position: string,
  entrance_type?: string | null,
  store_id: string,
};

export type ModelReadersConditionInput = {
  status?: ModelStringInput | null,
  position?: ModelStringInput | null,
  entrance_type?: ModelStringInput | null,
  store_id?: ModelIDInput | null,
  and?: Array< ModelReadersConditionInput | null > | null,
  or?: Array< ModelReadersConditionInput | null > | null,
  not?: ModelReadersConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateReadersInput = {
  id: string,
  status?: string | null,
  position?: string | null,
  entrance_type?: string | null,
  store_id?: string | null,
};

export type DeleteReadersInput = {
  id: string,
};

export type CreateBeaconInput = {
  id?: string | null,
  mac: string,
  status: string,
  signal_strength: number,
  reader_id: string,
};

export type ModelBeaconConditionInput = {
  mac?: ModelStringInput | null,
  status?: ModelStringInput | null,
  signal_strength?: ModelIntInput | null,
  reader_id?: ModelIDInput | null,
  and?: Array< ModelBeaconConditionInput | null > | null,
  or?: Array< ModelBeaconConditionInput | null > | null,
  not?: ModelBeaconConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateBeaconInput = {
  id: string,
  mac?: string | null,
  status?: string | null,
  signal_strength?: number | null,
  reader_id?: string | null,
};

export type DeleteBeaconInput = {
  id: string,
};

export type CreateLocationInput = {
  id?: string | null,
  latitude: number,
  longitude: number,
  reader_id: string,
};

export type ModelLocationConditionInput = {
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  reader_id?: ModelIDInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateLocationInput = {
  id: string,
  latitude?: number | null,
  longitude?: number | null,
  reader_id?: string | null,
};

export type DeleteLocationInput = {
  id: string,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
};

export type ModelReadersFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  position?: ModelStringInput | null,
  entrance_type?: ModelStringInput | null,
  store_id?: ModelIDInput | null,
  and?: Array< ModelReadersFilterInput | null > | null,
  or?: Array< ModelReadersFilterInput | null > | null,
  not?: ModelReadersFilterInput | null,
};

export type ModelBeaconFilterInput = {
  id?: ModelIDInput | null,
  mac?: ModelStringInput | null,
  status?: ModelStringInput | null,
  signal_strength?: ModelIntInput | null,
  reader_id?: ModelIDInput | null,
  and?: Array< ModelBeaconFilterInput | null > | null,
  or?: Array< ModelBeaconFilterInput | null > | null,
  not?: ModelBeaconFilterInput | null,
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  reader_id?: ModelIDInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionStoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionReadersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  position?: ModelSubscriptionStringInput | null,
  entrance_type?: ModelSubscriptionStringInput | null,
  store_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionReadersFilterInput | null > | null,
  or?: Array< ModelSubscriptionReadersFilterInput | null > | null,
};

export type ModelSubscriptionBeaconFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mac?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  signal_strength?: ModelSubscriptionIntInput | null,
  reader_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBeaconFilterInput | null > | null,
  or?: Array< ModelSubscriptionBeaconFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionLocationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  reader_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLocationFilterInput | null > | null,
  or?: Array< ModelSubscriptionLocationFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateStoreMutationVariables = {
  input: CreateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type CreateStoreMutation = {
  createStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    readers?:  {
      __typename: "ModelReadersConnection",
      items:  Array< {
        __typename: "Readers",
        id: string,
        status: string,
        position: string,
        entrance_type?: string | null,
        store_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStoreMutationVariables = {
  input: UpdateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type UpdateStoreMutation = {
  updateStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    readers?:  {
      __typename: "ModelReadersConnection",
      items:  Array< {
        __typename: "Readers",
        id: string,
        status: string,
        position: string,
        entrance_type?: string | null,
        store_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStoreMutationVariables = {
  input: DeleteStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type DeleteStoreMutation = {
  deleteStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    readers?:  {
      __typename: "ModelReadersConnection",
      items:  Array< {
        __typename: "Readers",
        id: string,
        status: string,
        position: string,
        entrance_type?: string | null,
        store_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReadersMutationVariables = {
  input: CreateReadersInput,
  condition?: ModelReadersConditionInput | null,
};

export type CreateReadersMutation = {
  createReaders?:  {
    __typename: "Readers",
    id: string,
    status: string,
    position: string,
    entrance_type?: string | null,
    store_id: string,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        latitude: number,
        longitude: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    beacons?:  {
      __typename: "ModelBeaconConnection",
      items:  Array< {
        __typename: "Beacon",
        id: string,
        mac: string,
        status: string,
        signal_strength: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReadersMutationVariables = {
  input: UpdateReadersInput,
  condition?: ModelReadersConditionInput | null,
};

export type UpdateReadersMutation = {
  updateReaders?:  {
    __typename: "Readers",
    id: string,
    status: string,
    position: string,
    entrance_type?: string | null,
    store_id: string,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        latitude: number,
        longitude: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    beacons?:  {
      __typename: "ModelBeaconConnection",
      items:  Array< {
        __typename: "Beacon",
        id: string,
        mac: string,
        status: string,
        signal_strength: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReadersMutationVariables = {
  input: DeleteReadersInput,
  condition?: ModelReadersConditionInput | null,
};

export type DeleteReadersMutation = {
  deleteReaders?:  {
    __typename: "Readers",
    id: string,
    status: string,
    position: string,
    entrance_type?: string | null,
    store_id: string,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        latitude: number,
        longitude: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    beacons?:  {
      __typename: "ModelBeaconConnection",
      items:  Array< {
        __typename: "Beacon",
        id: string,
        mac: string,
        status: string,
        signal_strength: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBeaconMutationVariables = {
  input: CreateBeaconInput,
  condition?: ModelBeaconConditionInput | null,
};

export type CreateBeaconMutation = {
  createBeacon?:  {
    __typename: "Beacon",
    id: string,
    mac: string,
    status: string,
    signal_strength: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBeaconMutationVariables = {
  input: UpdateBeaconInput,
  condition?: ModelBeaconConditionInput | null,
};

export type UpdateBeaconMutation = {
  updateBeacon?:  {
    __typename: "Beacon",
    id: string,
    mac: string,
    status: string,
    signal_strength: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBeaconMutationVariables = {
  input: DeleteBeaconInput,
  condition?: ModelBeaconConditionInput | null,
};

export type DeleteBeaconMutation = {
  deleteBeacon?:  {
    __typename: "Beacon",
    id: string,
    mac: string,
    status: string,
    signal_strength: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    latitude: number,
    longitude: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    latitude: number,
    longitude: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    latitude: number,
    longitude: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStoreQueryVariables = {
  id: string,
};

export type GetStoreQuery = {
  getStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    readers?:  {
      __typename: "ModelReadersConnection",
      items:  Array< {
        __typename: "Readers",
        id: string,
        status: string,
        position: string,
        entrance_type?: string | null,
        store_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoresQuery = {
  listStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      name: string,
      readers?:  {
        __typename: "ModelReadersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReadersQueryVariables = {
  id: string,
};

export type GetReadersQuery = {
  getReaders?:  {
    __typename: "Readers",
    id: string,
    status: string,
    position: string,
    entrance_type?: string | null,
    store_id: string,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        latitude: number,
        longitude: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    beacons?:  {
      __typename: "ModelBeaconConnection",
      items:  Array< {
        __typename: "Beacon",
        id: string,
        mac: string,
        status: string,
        signal_strength: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReadersQueryVariables = {
  filter?: ModelReadersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReadersQuery = {
  listReaders?:  {
    __typename: "ModelReadersConnection",
    items:  Array< {
      __typename: "Readers",
      id: string,
      status: string,
      position: string,
      entrance_type?: string | null,
      store_id: string,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      beacons?:  {
        __typename: "ModelBeaconConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBeaconQueryVariables = {
  id: string,
};

export type GetBeaconQuery = {
  getBeacon?:  {
    __typename: "Beacon",
    id: string,
    mac: string,
    status: string,
    signal_strength: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBeaconsQueryVariables = {
  filter?: ModelBeaconFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBeaconsQuery = {
  listBeacons?:  {
    __typename: "ModelBeaconConnection",
    items:  Array< {
      __typename: "Beacon",
      id: string,
      mac: string,
      status: string,
      signal_strength: number,
      reader_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    latitude: number,
    longitude: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      latitude: number,
      longitude: number,
      reader_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReadersByStore_idQueryVariables = {
  store_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReadersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReadersByStore_idQuery = {
  readersByStore_id?:  {
    __typename: "ModelReadersConnection",
    items:  Array< {
      __typename: "Readers",
      id: string,
      status: string,
      position: string,
      entrance_type?: string | null,
      store_id: string,
      location?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      beacons?:  {
        __typename: "ModelBeaconConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BeaconsByReader_idQueryVariables = {
  reader_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBeaconFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BeaconsByReader_idQuery = {
  beaconsByReader_id?:  {
    __typename: "ModelBeaconConnection",
    items:  Array< {
      __typename: "Beacon",
      id: string,
      mac: string,
      status: string,
      signal_strength: number,
      reader_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LocationsByReader_idQueryVariables = {
  reader_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LocationsByReader_idQuery = {
  locationsByReader_id?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      latitude: number,
      longitude: number,
      reader_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    readers?:  {
      __typename: "ModelReadersConnection",
      items:  Array< {
        __typename: "Readers",
        id: string,
        status: string,
        position: string,
        entrance_type?: string | null,
        store_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    readers?:  {
      __typename: "ModelReadersConnection",
      items:  Array< {
        __typename: "Readers",
        id: string,
        status: string,
        position: string,
        entrance_type?: string | null,
        store_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    readers?:  {
      __typename: "ModelReadersConnection",
      items:  Array< {
        __typename: "Readers",
        id: string,
        status: string,
        position: string,
        entrance_type?: string | null,
        store_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReadersSubscriptionVariables = {
  filter?: ModelSubscriptionReadersFilterInput | null,
};

export type OnCreateReadersSubscription = {
  onCreateReaders?:  {
    __typename: "Readers",
    id: string,
    status: string,
    position: string,
    entrance_type?: string | null,
    store_id: string,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        latitude: number,
        longitude: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    beacons?:  {
      __typename: "ModelBeaconConnection",
      items:  Array< {
        __typename: "Beacon",
        id: string,
        mac: string,
        status: string,
        signal_strength: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReadersSubscriptionVariables = {
  filter?: ModelSubscriptionReadersFilterInput | null,
};

export type OnUpdateReadersSubscription = {
  onUpdateReaders?:  {
    __typename: "Readers",
    id: string,
    status: string,
    position: string,
    entrance_type?: string | null,
    store_id: string,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        latitude: number,
        longitude: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    beacons?:  {
      __typename: "ModelBeaconConnection",
      items:  Array< {
        __typename: "Beacon",
        id: string,
        mac: string,
        status: string,
        signal_strength: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReadersSubscriptionVariables = {
  filter?: ModelSubscriptionReadersFilterInput | null,
};

export type OnDeleteReadersSubscription = {
  onDeleteReaders?:  {
    __typename: "Readers",
    id: string,
    status: string,
    position: string,
    entrance_type?: string | null,
    store_id: string,
    location?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        latitude: number,
        longitude: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    beacons?:  {
      __typename: "ModelBeaconConnection",
      items:  Array< {
        __typename: "Beacon",
        id: string,
        mac: string,
        status: string,
        signal_strength: number,
        reader_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBeaconSubscriptionVariables = {
  filter?: ModelSubscriptionBeaconFilterInput | null,
};

export type OnCreateBeaconSubscription = {
  onCreateBeacon?:  {
    __typename: "Beacon",
    id: string,
    mac: string,
    status: string,
    signal_strength: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBeaconSubscriptionVariables = {
  filter?: ModelSubscriptionBeaconFilterInput | null,
};

export type OnUpdateBeaconSubscription = {
  onUpdateBeacon?:  {
    __typename: "Beacon",
    id: string,
    mac: string,
    status: string,
    signal_strength: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBeaconSubscriptionVariables = {
  filter?: ModelSubscriptionBeaconFilterInput | null,
};

export type OnDeleteBeaconSubscription = {
  onDeleteBeacon?:  {
    __typename: "Beacon",
    id: string,
    mac: string,
    status: string,
    signal_strength: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    latitude: number,
    longitude: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    latitude: number,
    longitude: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    latitude: number,
    longitude: number,
    reader_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
