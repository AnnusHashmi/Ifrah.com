const INITIAL_STATE = {
  sections: [
    {
      title: 'Daughter and Mother',
      imageUrl: "https://i.ibb.co/q956dtP/pexels-gustavo-fring-4127354.jpg",
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
