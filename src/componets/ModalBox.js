import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "../store/actions/action";

// antd
import { Modal, Button, Input, Form } from "antd";

// componets
import Users from "./Users";

const Modalbox = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editId, setEditId] = useState();
  const [title, setTitle] = useState();
  const dispatch = useDispatch();

  const showModal = () => {
    setTitle("Add User");
    setEditId("");
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields();
    const formValues = form.getFieldsValue();
    if (editId) {
      formValues.id = editId;
      if (formValues.fname && formValues.lname && formValues.number) {
        dispatch(editUser(formValues));
        setIsModalVisible(false);
      }
    } else {
      if (formValues.fname && formValues.lname && formValues.number) {
        dispatch(addUser(formValues));
        setIsModalVisible(false);
      }
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="modelBox">
        <Button type="primary" onClick={showModal}>
          Add User
        </Button>
      </div>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} autoComplete="off">
          <Form.Item
            label="First Name"
            name="fname"
            rules={[{ required: true, message: "Please input First name!" }]}
          >
            <Input type="text" placeholder="Enter First Name" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lname"
            rules={[{ required: true, message: "Please input Last name!" }]}
          >
            <Input type="text" placeholder="Enter Last Name" />
          </Form.Item>
          <Form.Item
            label="Number"
            name="number"
            rules={[
              { required: true, message: "Please input your Number!", max: 10 },
            ]}
          >
            <Input type="number" placeholder="Enter Number" />
          </Form.Item>
        </Form>
      </Modal>
      <Users
        setEditId={setEditId}
        setIsModalVisible={setIsModalVisible}
        form={form}
        setTitle={setTitle}
      />
    </>
  );
};

export default Modalbox;
