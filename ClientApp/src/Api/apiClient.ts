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

export async function fetchUnconfirmedSightings(): Promise<null | ListSightings> {
  const response = await fetch(`/api/confirm-sighting`);
  return await response.json();
}
// export async function submitSearch(searchterm: string):Promise<null | ListSightings>{
//   const response = await fetch('api/search');
//   return await response.json();
// }
