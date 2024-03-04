import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { releasePrisoner } from "../store/prisonSlice";
import { useNavigate } from "react-router-dom";
import styles from "./List.module.css";
import axios from "axios";

const List = () => {
  const navigate = useNavigate();
  // const prisoners = useSelector((state) => state.prison.prisoners);
  // console.log(JSON.stringify(prisoners), "redux");
  // const dispatch = useDispatch();
  const [prisoners, setPrisoners] = useState([]);

  const fetchPrisoners = async () => {
    try {
      const response = await axios.get("http://192.168.1.12:8001/prison/list/");
      setPrisoners(response.data);
    } catch (error) {
      console.error("Error:", error);
      window.alert("Failed to fetch prisoners data");
    }
  };

  useEffect(() => {
    fetchPrisoners();
  }, []);

  console.log(new Date());

  const handleRemove = async (id) => {
    try {
      const response = await axios.patch(
        `http://192.168.1.12:8001/prison/punish/${id}`
      );
      await fetchPrisoners();
      console.log(response.data, 
        'uy');
    } catch (error) {
      console.error("Error:", error);
      window.alert("Failed to fetch prisoners data");
    }
  };

  const handleEdit = (data) => {
    navigate(`/PrisonForm?record=${data.pk}` )
  };

  return (
    <div className={styles.listContainer}>
      {prisoners?.map((data, index) => (
        <div key={index} className={styles.card}>
          {/* <div className={styles.cardHeader}>ID: {data.id}</div> */}
          <div className={styles.cardBody}>
            <div>Name: {data.name}</div>
            <div>Age: {data.age}</div>
            <div>Gender: {data.gender}</div>
            <div>Type: {data.punishment_type}</div>
            <div>Date: {data.decision_date}</div>
          </div>
          <div className={styles.buttonContainer}>
            {data.punishment_type === "Temporary" &&
            new Date(data.decision_date) < new Date() ? (
              (console.log(new Date()),
              (
                <Button
                  onClick={() => {
                    handleRemove(data.pk);
                  }}
                  variant="success"
                >
                  Release
                </Button>
              ))
            ) : (
              <Button variant="success" disabled>
                Release
              </Button>
            )}
            <Button
              onClick={() => {
                handleEdit(data);
              }}
              variant="primary"
            >
              Edit
            </Button>
            {data.punishment_type === "Death" &&
            new Date(data.decision_date) < new Date() ? (
              (console.log("Death enabled"),
              (
                <Button
                  onClick={() => {
                    handleRemove(data.pk);
                  }}
                  variant="danger"
                >
                  Execute
                </Button>
              ))
            ) : (
              <Button variant="danger" disabled>
                Execute
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
