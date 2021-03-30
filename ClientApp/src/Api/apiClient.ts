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
