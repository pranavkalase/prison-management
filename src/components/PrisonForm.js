// import React from "react";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import NameField from "./NameField";
// import AgeField from "./AgeField";
// import GenderDropdown from "./GenderDropdown";
// import TypeDropdown from "./TypeDropdown";
// import DateField from "./DateField";
// import { useDispatch } from "react-redux";
// import { addPrisoner, updatePrisoner } from "../store/prisonSlice";
// import "./PrisonForm.css";

// import { useLocation } from "react-router-dom";

// const PrisonForm = () => {
//   const dispatch = useDispatch();

//   const location = useLocation();
//   const initialValues = location.state?.prisonerData || {
//     name: "",
//     age: "",
//     gender: "",
//     type: "",
//     date: "",
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     age: Yup.number()
//       .required("Age is required")
//       .min(12, "Minimum age must be 12 years old")
//       .max(100, "Maximum age must be 100 years old"),
//     gender: Yup.string().required("Gender is required"),
//     type: Yup.string().required("Type is required"),
//     date: Yup.date().when(["type"], (type, schema) => {
//       if (["death", "lifetime"].includes(type)) {
//         return schema.required("Date is required");
//       }
//       return schema.nullable();
//     }),
//   });

//   const onSubmit = (values, resetForm) => {
//     if (initialValues?.id) {
//       dispatch(updatePrisoner({ ...initialValues, ...values }));
//       window.alert("User Sucessfully edited")
//     } else {
//       const IdData = { ...values, id: new Date().getTime() };
//       dispatch(addPrisoner(IdData));
//       console.log("update executed");
//       resetForm();
//     }

//     // console.log("Form Submitted");
//     // console.log(typeof resetForm);
   
//   };

//   return (
//     <>


//     <h2 className="details">Prisoner Details</h2>
//       <div className="form-container">
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
//         >
//           <Form>
//             <NameField />
//             <AgeField />
//             <GenderDropdown />
//             <TypeDropdown />
//             <DateField />
//             <button className="button" type="submit">
//               Submit
//             </button>
//           </Form>
//         </Formik>
//       </div>
//     </>
//   );
// };

// export default PrisonForm;
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NameField from "./NameField";
import AgeField from "./AgeField";
import GenderDropdown from "./GenderDropdown";
import TypeDropdown from "./TypeDropdown";
import DateField from "./DateField";
import { useDispatch } from "react-redux";
import { addPrisoner, updatePrisoner } from "../store/prisonSlice";
import "./PrisonForm.css";
import "../Form.css"

import { useLocation } from "react-router-dom";

const PrisonForm = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const initialValues = location.state?.prisonerData || {
    name: "",
    age: "",
    gender: "",
    type: "",
    date: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    age: Yup.number()
      .required("Age is required")
      .min(12, "Minimum age must be 12 years old")
      .max(100, "Maximum age must be 100 years old"),
    gender: Yup.string().required("Gender is required"),
    type: Yup.string().required("Type is required"),
    date: Yup.date().when(["type"], (type, schema) => {
      if (["death", "lifetime"].includes(type)) {
        return schema.required("Date is required");
      }
      return schema.nullable();
    }),
  });

  const onSubmit = (values, resetForm) => {
    if (initialValues?.id) {
      dispatch(updatePrisoner({ ...initialValues, ...values }));
      window.alert("User Sucessfully edited")
    } else {
      const IdData = { ...values, id: new Date().getTime() };
      dispatch(addPrisoner(IdData));
      console.log("update executed");
      resetForm();
    }

    // console.log("Form Submitted");
    // console.log(typeof resetForm);
   
  };

  return (
    <>


    <h2 className="details">Prisoner Details</h2>
      <div className="signupSection">
      <div class="info">
    <h2>Maharashtra Police</h2>
    <i class="icon" aria-hidden="true"></i>
    <p>Prisoners Details</p>
  </div>
        <Formik
          initialValues={initialValues}
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
