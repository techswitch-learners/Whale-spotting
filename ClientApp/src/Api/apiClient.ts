export interface NewSighting {
    species: string;
    quantity: number;
    location: string;
    latitude: number;
    longitude: number;
    description: string;
    sightedAt: string;
    submittedBy: string;
    email: string;
}


export async function submitSighting(newSighting: NewSighting) {
    const response = await fetch(`https://localhost:5001/submit-sighting/submit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSighting),
    });
    
    if (!response.ok) {
        throw new Error(await response.json())
    }
}
