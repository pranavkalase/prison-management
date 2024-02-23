

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { releasePrisoner } from "../store/prisonSlice";
import { useNavigate } from "react-router-dom";
import styles from './List.module.css';



const List = () => {

  const navigate = useNavigate();
  const prisoners = useSelector((state) => state.prison.prisoners);
  console.log(JSON.stringify(prisoners), "redux");
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(releasePrisoner(id));
  };
  
  const handleEdit = (data) => {
    navigate(`/PrisonForm/${data.id}`, { state: { prisonerData: data } });
  };

  return (
    <div className={styles.listContainer}>
      {prisoners.map((data, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardHeader}>ID: {data.id}</div>
          <div className={styles.cardBody}>
            <div>Name: {data.name}</div>
            <div>Age: {data.age}</div>
            <div>Gender: {data.gender}</div>
            <div>Type: {data.type}</div>
            <div>Date: {data.date}</div>
          </div>
          <div className={styles.buttonContainer}>
            {data.type === "temporary" && new Date(data.date) < new Date() ? (
              <Button onClick={() => { handleRemove(data.id) }} variant="success">Release</Button>
            ) : (
              <Button variant="success" disabled>Release</Button>
            )}
            <Button onClick={() => { handleEdit(data) }} variant="primary">Edit</Button>
            {data.type === "death" && new Date(data.date) < new Date() ? (
              <Button onClick={() => { handleRemove(data.id) }} variant="danger">Execute</Button>
            ) : (
              <Button variant="danger" disabled>Execute</Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
