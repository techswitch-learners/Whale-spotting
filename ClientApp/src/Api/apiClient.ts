export interface NewSighting {
  species: string;
  quantity: string;
  location: string;
  latitude: number;
  longitude: number;
  description: string;
  sightedAt: string;
  submittedByName: string;
  submittedByEmail: string;
}

export async function submitSighting(newSighting: NewSighting) {
  const response = await fetch(
    `/submit-sighting/submit`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSighting),
    }
  );

  if (!response.ok) {
    throw new Error(await response.json());
  }
}


export interface SightingResponse {
  apiId: string;
  species: string;
  quantity: string;
  location: string;
  latitude: number;
  longitude: number;
  description: string;
  sightedAt: string;
  submittedByName: string;
  submittedByEmail: string;  
}

export interface SightingResponseList{
  RecentSightingsList: SightingResponse[]
}

export async function getRecentSightings(): Promise<SightingResponseList> {
  const response = await fetch(`/recentsightings`);
 
  if (!response.ok) {
    throw new Error(await response.json());
  }

  return await response.json();
}
