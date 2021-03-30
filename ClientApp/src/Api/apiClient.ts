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
  export interface ConfirmListResponse<T> {
    items: T[];
    totalNumberOfItems: number;
    page: number;
    nextPage: string;
    previousPage: string;
}
export interface Sighting {
  id: number;
  species: string;
    quantity: string;
    sightedAt: string;
    submittedByName: string;
    submittedByEmail: string;

}
export interface IEnumerable<Sighting>{
  
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
  export async function fetchUnconfirmedSightings(sightings: IEnumerable<Sighting>): Promise<ConfirmListResponse<Sighting>> {
    const response = await fetch(`/confirm-sighting`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sightings),
    }
    );
    return await response.json();
}