export const getPlacesData = (idArray: Array<number>) => idArray.map(id => ({
  id,
  name: `Place ${id}`,
  description: `Description ${id}`,
  location: `Location ${id}`,
}))

export const getPlaceData = (id: number) => ({ id, place: `Place ${id}`, description: `Description ${id}`, location: `Location ${id}` })