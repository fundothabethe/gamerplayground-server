### Server side code

## Data coming from readers

[\
&nbsp;    {\
&nbsp;&nbsp;   "TimeStamp": String,\
 &nbsp;&nbsp;       "DeviceMac(hex)": String,\
        "DataFormat": String,\
        "BLEMac(hex)": String,\
        "RSSI(dBm)": Integer,\
        "BLEName": String,\
        "RawData(hex)": String\
    },\
    ...\
]\

## cleaned data

[
    {
        timestamp: String,
        devicemac*hex*: String,
        dataformat: String,
        blemac*hex*: String,
        rssi*dbm*: Integer,
        blename: String,
        rawdata*hex*: String
    },
    ...
]

## Structure of redis database

## **Reader collection**

{
    outer_entrance: {
        entrance_type: String "inner" || "outer",
        entrance: Boolean,
        reader_id: String
    },
    inner_entrance: {
        entrance_type: String "inner" || "outer",
        entrance: Boolean,
    },
    reader_mac: {
        ble_mac: {
        status: String "active",
        strength: Integer,
        in_store: Boolean
        },
        ...
    }
    ...
}

## Data updated on the dynamodb
