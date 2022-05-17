import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => CAMPSITES;

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// };

export const selectCampsiteById = (id) =>
  CAMPSITES.find((campsite) => campsite.id === parseInt(id));

export const selectFeaturedCampsite = () =>
  CAMPSITES.find((campsite) => campsite.featured);
