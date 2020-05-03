const toHomePage = () => {
  return {
    type: "LINK_TO_HOMEPAGE_CLICKED"
  }
}
const getDogsImagesConfig = (img) => {
  return {
    type: "DOGS_IMAGES_CONFING_GETTED",
    payload: img
  }
}

const getDogsImages = (img) => {
  return {
      type: "DOGS_IMAGES_GETTED",
      payload: img
  }
}

const getBreedList = (breedList) => {
  return {
    type: "BREED_LIST_GETTED",
    payload: breedList,
  };
};

const fetchBreedList = (dispatch, dogApiService) => () => {
  dogApiService.getAllBreedsList()
  .then((res) => dispatch(getBreedList(Object.keys(res.message))));
}

export {
  toHomePage,
  getDogsImagesConfig,
  getDogsImages,
  fetchBreedList,
}