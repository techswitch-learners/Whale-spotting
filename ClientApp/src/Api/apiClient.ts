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
  createdAt: string;
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
  createdAt: string;
  submittedByName: string;
  submittedByEmail: string;
  confirmState: number;
}

export interface SearchResponse {
  sightings: Sighting[];
  totalNumberOfItems: number;
  page: number;
  pageSize: number;
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

export async function submitSearch(species: string, location: string, sightedAt: string, page: number, pageSize: number): Promise<null | SearchResponse> {
  const response =await fetch(
    `api/search?Species=${species}&Location=${location}&SightedAt=${sightedAt}&Page=${page}&PageSize=${pageSize}`
  );
  return await response.json();
}

export async function getSighting(Id: number): Promise<SightingResponse> {
  const token = await authService.getAccessToken();
  const response = await fetch(`/admin/getSighting/${Id}`, {
    headers: !token ? {} : { 'Authorization': `Bearer ${token}`}
  });
  
  if (!response.ok) {
    throw new Error(await response.json());
  }
  return await response.json();
}

export async function fetchUnconfirmedSightings(): Promise<null | ListSightings> {
  const token = await authService.getAccessToken();
  const response = await fetch(`/api/confirm-sighting`, {
    headers: !token ? {} : { 'Authorization': `Bearer ${token}`}
  });
  return await response.json();
}

export async function confirmSighting(Id: number): Promise<SightingResponse> {
  const token = await authService.getAccessToken();
  const response = await fetch(`/admin/confirmSighting/${Id}`, {
    method: "POST",
    headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
  });

  if (!response.ok) {
    throw new Error(await response.json());
  }

  return await response.json();
}

export async function deleteSighting(Id: number) 
{
  const token = await authService.getAccessToken();
  const response = await fetch(`/admin/deleteSighting/${Id}`, {
    method: "POST",
    headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
  });

  if (!response.ok) {
    throw new Error(await response.json());
  }


  return await response.json();
}

export async function restoreSighting(Id: number)
{
  const token = await authService.getAccessToken();
  const response = await fetch(`/admin/restoreSighting/${Id}`, {
    method: "POST",
    headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
  });

  if (!response.ok) {
    throw new Error(await response.json());
  }

  return await response.json();
}

export async function updateAndConfirmSighting(sightingToUpdate: Sighting) 
{
  const token = await authService.getAccessToken();
  const response = await fetch(`admin/updateAndConfirmSighting/${sightingToUpdate.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
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
