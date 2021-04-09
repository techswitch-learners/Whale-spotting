import { LatLng, LatLngTuple } from 'leaflet';
import React, { useState } from 'react';

const LayerContext:any = React.createContext({});

// under the declaration of the LayerContext, declare the Provider Component

const LayerContextProvider = ({ children }: any) => {
    const [point, setPoint] = useState<LatLngTuple>([0, 0]);

    const defaultValue = {
        point,
        setPoint
    }

    return (
        <LayerContext.Provider value={defaultValue}>
            {children}
        </LayerContext.Provider>
    )
}


export { LayerContext, LayerContextProvider };