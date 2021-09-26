import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../store/actions/action";

// antd
import { Popconfirm, Table, Space, Button } from "antd";

const Users = ({ form, setIsModalVisible, setEditId }) => {
  const editDataOfRow = (data) => {
    console.log(data,"data")
    setEditId(data.id);
    form.setFieldsValue(data);
    setIsModalVisible(true);
  };

  const handleConfirm = (elem) => {
    dispatch(deleteUser(elem.id));
  };

  const list = useSelector((state) => state.reducers.list);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Full Name",
      key: "fname",
      render: (elem) => `${elem.fname} ${elem.lname}`,
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Action",
      key: "action",
      render: (elem) => (
        <Space size="middle">
          <Popconfirm
            onConfirm={() => handleConfirm(elem)}
            title="Are you sure？"
            okText="Yes"
            cancelText="No"
          >
            <Button> delete</Button>
          </Popconfirm>
          <Button onClick={() => editDataOfRow(elem)}> edit</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      {!list?.number && list[0]?.number ? (
        <Table dataSource={list} columns={columns} />
      ) : (
        <h3 className="List">No data</h3>
      )}
    </>
  );
};

export default Users;
