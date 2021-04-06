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
export interface Sighting {
  id: number;
  species: string;
  quantity: string;
  location: string;
  latitude: number;
  longitude: number;
  description: string;
  sightedAt: string;
  submittedByName: string;
  submittedByEmail: string;
  confirmState: number;
}

export interface ListSightings {
  sightings: Sighting[];
}

export interface SightingResponse {
  id: number;
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

export interface ListResponse<T> {
  items: T[];
  // totalNumberOfItems: number;
  // page: number;
  // nextPage: string;
  // previousPage: string;
}

export interface Sighting {
  id: number;
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
  const response = await fetch(`/api/submit-sighting/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSighting),
  });

  if (!response.ok) {
    throw new Error(await response.json());
  }
}

export async function submitSearch(species: string, location: string, sightedAt: string): Promise<ListResponse<Sighting>> {
  const response =await fetch(
    `/submit-search/search?species=${species}&location=${location}&sightedAt=${sightedAt}`);
    return await response.json();
}
export async function getSighting(Id: number): Promise<SightingResponse> {
  const response = await fetch(`/admin/getSighting/${Id}`);
 
  if (!response.ok) {
    throw new Error(await response.json());
  }

  return await response.json();
}
export async function fetchUnconfirmedSightings(): Promise<null | ListSightings> {
  const response = await fetch(`/api/confirm-sighting`);
  return await response.json();
}
