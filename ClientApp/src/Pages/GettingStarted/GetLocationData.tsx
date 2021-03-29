import {Locations} from "./GettingStarted";


interface Coordinates {
    latitude: number;
    longitude: number;
    label: string;
}

const canadaLocationData = {
    latitude: 53.135509,
    longitude: -57.660435,
    label: "NewFoundland, Canada",
};

const scotlandLocationData = {
    latitude:57.7207794189,
    longitude:-5.6862931252,
    label:"Gairloch, Scotland",
 };

 const australiaLocationData = {
    latitude: -20.917574,
    longitude: -142.702789,
    label: "Queensland, Australia",
};

function GetLocationData(location: Locations): Coordinates {
   
    switch (location) {
        case Locations.Canada:
            return canadaLocationData;
        case Locations.Scotland:
            return scotlandLocationData;
        case Locations.Australia:
            return australiaLocationData;
    }
    
}

export{GetLocationData}