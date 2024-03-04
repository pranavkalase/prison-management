import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NameField from "./NameField";
import AgeField from "./AgeField";
import GenderDropdown from "./GenderDropdown";
import TypeDropdown from "./TypeDropdown";
import DateField from "./DateField";
import { useDispatch } from "react-redux";

import "./PrisonForm.css";
import "../Form.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const PrisonForm = () => {
  const search = useLocation().search;
  const record = new URLSearchParams(search).get("record");

  const [existingData, setExistingData] = useState({
    fetching: false,
    data: null,
  });
  useEffect(() => {
    const fetchExistingData = async () => {
      setExistingData((prevstate) => {
        return {
          ...prevstate,
          fetching: true,
        };
      });

      try {
        const response = await axios.get(
          `http://192.168.1.12:8001/prison/${record}/`
        );
        setExistingData((prevState) => {
          console.log(response.data);
          return {
            fetching: false,
            data: response.data,
          };
        });
      } catch (error) {}
    };
    if (record) {
      fetchExistingData();
    }
  }, []);

  const formikInitialValues = () => {
    console.log(existingData.data);
    if (record) {
      return {
        name: existingData.data !== null ? existingData.data.name : "",
        age: existingData.data !== null ? existingData.data.age : "",
        gender: existingData.data !== null ? existingData.data.gender : "",
        punishment_type:
          existingData.data !== null ? existingData.data.punishment_type : "",
        date: existingData.data !== null ? existingData.data.date : "",
      };
    } else {
      return {
        name: "",
        age: "",
        gender: "",
        punishment_type: "",
        date: "",
      };
    }
  };

  //  const initialValues =  {
  //     name: "",
  //     age: "",
  //     gender: "",
  //     punishment_type: "",
  //     date: "",
  //   };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    age: Yup.number()
      .required("Age is required")
      .min(12, "Minimum age must be 12 years old")
      .max(100, "Maximum age must be 100 years old"),
    gender: Yup.string().required("Gender is required"),
    punishment_type: Yup.string().required("Type is required"),
    decison_date: Yup.date().when(
      ["punishment_type"],
      (punishment_type, schema) => {
        if (["Death", "Lifetime"].includes(punishment_type)) {
          return schema.required("Date is required");
        }
        return schema.nullable();
      }
    ),
  });

  const onSubmit = async (values, resetForm) => {
    if(!record){
    try {
      const response = await axios.post(
        "http://192.168.1.12:8001/prison/",
        values
      );
      console.log("Form Submitted", response.data);
      // dispatch(updatePrisoner({ ...initialValues, ...values }));
      window.alert("User Sucessfully added");
    } catch (error) {
      console.error("Error:", error);
      window.alert("Failed to submit form");
    }
  } else if (record) {
    try {
      const response = await axios.patch( `http://192.168.1.12:8001/prison/${record}/`,values)
      window.alert("User Sucessfully edited");
    }catch(error){
      console.error("Error:", error);
      window.alert("Failed to submit form")
    }
  }
}

  // console.log("Form Submitted");
  // console.log(typeof resetForm);

  return (
    <>
      <h2 className="details">Prisoner Details</h2>
      <div className="signupSection">
        <div className="info">
          <h2>Maharashtra Police</h2>
          <i className="icon" aria-hidden="true"></i>
          <p>Prisoners Details</p>
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={formikInitialValues()}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
        >
          <Form className="signupForm">
            <NameField />
            <AgeField />
            <GenderDropdown />
            <TypeDropdown />
            <DateField />
            <button id="join-btn" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default PrisonForm;
