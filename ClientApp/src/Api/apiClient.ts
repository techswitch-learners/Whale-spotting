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

export async function submitSearch(species: string, location: string, sightedAt: string): Promise<ListResponse<Sighting>> {
  const response =await fetch(
    `/submit-search/search?species=${species}&location=${location}&sightedAt=${sightedAt}`);
    return await response.json();
}