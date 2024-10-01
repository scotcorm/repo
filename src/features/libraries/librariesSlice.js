import { LIBRARIES } from '../../app/shared/LIBRARIES';

export const selectAllLibraries = () => {
  return LIBRARIES;
};

// export const selectRandomLibrary = () => {
//   return LIBRARIES[Math.floor(LIBRARIES.length * Math.random())];
// };

export const selectLibraryById = (id) => {
  return LIBRARIES.find((library) => library.id === id);
};
