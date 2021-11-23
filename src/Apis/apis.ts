const API_URI = 'https://localhost:44337/api/';

export const getAllMatches = () => {
  return fetch(API_URI + 'matches').then((response) => {
    return response.json();
  });
};
