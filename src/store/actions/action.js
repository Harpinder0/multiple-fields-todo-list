export const addUser = ({id,fname, lname, number }) => {
  return {
    type: "ADD_USER",
    payload: {
      id: new Date().getTime().toString(),
      fname: fname,
      lname:lname,
      number: number,
    },
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    id,
  };
};

export const editUser = (data,id) => {
  return {
    type: "EDIT_USER",
    key:id,
    payload: data,
  };
};
