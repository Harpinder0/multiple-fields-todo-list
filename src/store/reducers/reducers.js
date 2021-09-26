const initialData = {
  list: [],
};

const reducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_USER":
      const { id, fname, lname, number } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            key: id,
            id:id,
            fname: fname,
            lname: lname,
            number: number,
          },
        ],
      };

    case "DELETE_USER":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "EDIT_USER":
      const neList = state.list.map((elem) =>
        elem.id !== action.payload?.id ? elem : action.payload
      );
      return {
        ...state,
        list: neList,
      };

    default:
      return state;
  }
};

export default reducers;
