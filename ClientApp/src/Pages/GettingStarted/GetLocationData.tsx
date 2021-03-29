import {Locations} from "./GettingStarted";
import {scotland} from './LocationData';
import {canada} from './LocationData';
import {australia} from './LocationData';

interface Coordinates {
    latitude: number;
    longitude: number;
    label: string;
}

interface LocationSummaryData {
    name: string,
    imagesrc: string,
    description: string,
    whalespecies: string,
    besttimeofyear: string,
    touristinformation: string,
    url: string
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

function GetLocationSummary(location: Locations): LocationSummaryData {

    switch (location) {
        case Locations.Scotland:
            return scotland ;
        case Locations.Canada:
            return canada ;
        case Locations.Australia:
            return australia;

    }

}

export{GetLocationData}
export {GetLocationSummary}