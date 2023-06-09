import React, { useState } from "react";
import styles from "./Form.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import ConfirmSub from "../../components/ConfirmSub/ConfirmSub";
import api from "../../components/Api";

function Form(props) {
  const initialState = {
    name: "",
    email: "",
    destination: "",
    no_of_travellers: 0,
    budget_per_person: 0,
  };

  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    let res = await fetch(`${api}/submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    res = await res.json();
    console.log(res);
    setSubmitted(true);
    setSubmissionId(res.data._id);
  };

  return (
    <div className={styles.formPage}>
      <Header />
      {!submitted ? (
        <>
          <h2>Submission Form</h2>
          <h4>Contact us to plan your next journey!</h4>
          <form
            action="#"
            onSubmit={handleSubmit}
            data-testid="submission-form"
          >
            <div className={styles.formElement}>
              <label htmlFor="name">Name*</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                required
                data-testid="name-input"
              />
            </div>
            <div className={styles.formElement}>
              <label htmlFor="email">Email address*</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                required
                data-testid="email-input"
              />
            </div>
            <div className={styles.formElement}>
              <label htmlFor="destination">Where do you want to go?*</label>
              <br />
              <select
                name="destination"
                id="destination"
                onChange={handleChange}
                required
                data-testid="destination-select"
              >
                <option value=""></option>
                <option value="India">India</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
              </select>
            </div>
            <div className={styles.formElement}>
              <label htmlFor="no_of_travellers">No. of travellers*</label>
              <br />
              <input
                type="number"
                name="no_of_travellers"
                id="no_of_travellers"
                onChange={handleChange}
                required
                data-testid="travellers-count-input"
              />
            </div>
            <div className={styles.formElement}>
              <label htmlFor="budget_per_person">
                Budget per person (in $)*
              </label>
              <br />
              <input
                type="number"
                name="budget_per_person"
                id="budget_per_person"
                onChange={handleChange}
                required
                data-testid="budget-input"
              />
            </div>
            <div className={styles.bottomDiv}>
              <div>
                Total Budget :{" "}
                <span data-testid="total-budget">
                  {formData.no_of_travellers * formData.budget_per_person}
                </span>{" "}
                $
              </div>
              <div>
                <input type="submit" value="SUBMIT" data-testid="submit" />
              </div>
            </div>
          </form>
        </>
      ) : (
        <ConfirmSub id={submissionId} />
      )}
    </div>
  );
}

export default Form;
