import authService from '../components/api-authorization/AuthorizeService'

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
  sightings: SightingResponse[];
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
  confirmState: number;
}

export interface ListResponse<T> {
  items: T[];
  // totalNumberOfItems: number;
  // page: number;
  // nextPage: string;
  // previousPage: string;
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

export interface RecentSightingResponseList {
  recentSightingsList:SightingResponse[];
}

export async function getRecentSightings(): Promise<RecentSightingResponseList> {
  const response = await fetch(`/recentsightings`);
  if (!response.ok) {
    throw new Error(await response.json());
  }
  return await response.json();
}

export async function submitSearch(species: string, location: string, sightedAt: string): Promise<null | ListSightings> {
  const response =await fetch(
    `api/search?species=${species}&location=${location}&sightedAt=${sightedAt}`);
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

export async function confirmSighting(Id: number): Promise<SightingResponse> {
  const response = await fetch(`/admin/confirmSighting/${Id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!response.ok) {
    throw new Error(await response.json());
  }

  return await response.json();
}

export async function deleteSighting(Id: number) 
{
  const response = await fetch(`/admin/deleteSighting/${Id}`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(await response.json());
  }


  return await response.json();
}

export async function restoreSighting(Id: number)
{
  const response = await fetch(`/admin/restoreSighting/${Id}`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(await response.json());
  }

  return await response.json();
}

export async function updateAndConfirmSighting(sightingToUpdate: Sighting) 
{
  const response = await fetch(`admin/updateAndConfirmSighting/${sightingToUpdate.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sightingToUpdate),
  });

  if (!response.ok) {
    throw new Error(await response.json());
  }

  return await response.json();
}

export async function fetchApiData() 
{
  const token = await authService.getAccessToken();
  const response = await fetch(`/getapidata`, {
    method: "POST",
    headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
  });

  if (!response.ok) {
    throw new Error(await response.json());
  }
  return await response.status;
}
