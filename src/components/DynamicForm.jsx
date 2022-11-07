import React, { useState } from "react";
import data from "../assets/data.json";
import { ShowInfo } from "./ShowInfo";
import s from "./styles/DynamicForm.module.css";
// console.log(data);

const validate = (data) => {
  let error = {};
  if (data.position.length === 0) {
    error.position = "its required at least one platform";
  } else if (data.position > 1) {
    error.position = "Maximun 1 position";
  }
  return error;
};

export const DynamicForm = () => {
  const [error, setError] = useState({});
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    position: [],
    genero: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log({ form });
  };

  const handlePosition = (e) => {
    e.preventDefault();
    setError(
      validate({
        ...form,
        [e.target.name]: [e.target.value],
      })
    );
    setForm({
      ...form,
      position: !form.position.includes(e.target.value)
        ? [...form.position, e.target.value]
        : form.position.filter((p) => p !== e.target.value),
    });
    // if (form.position.length > 1) {
    //   alert(
    //     "Sorry, exceded the number of positions allowed, please delete one"
    //   );
    // }
  };
  const deletePosition = (e) => {
    setForm({
      ...form,
      position: form.position.filter((c) => c !== e),
    });
  };

  return (
    <div>
      <h1 className={s.title}>React Challenge of Kosmos</h1>
      <div className={s.container}>
        <div>
          <form className={s.form}>
            <fieldset>
              <legend>plase type your profile information</legend>
              <div className={s.info}>
                <label>Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={form.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className={s.info}>
                <label>ImageUrl: </label>
                <input
                  type="text"
                  name="image"
                  placeholder="url image..."
                  value={form.image}
                  onChange={handleInputChange}
                />
              </div>
              <div className={s.info}>
                <label>Description: </label>
                <textarea
                  name="description"
                  placeholder="type a description about your personality..."
                  value={form.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className={s.info}>
                <label>Select your current position: </label>
                <select
                  required
                  name="position"
                  onChange={handlePosition}
                  value={form.position}
                >
                  <option value="">positions...</option>
                  {data.fields.map((data) => (
                    <option value={data.position}>{data.position}</option>
                  ))}
                </select>
                <br />
                {error.position ? <span>{error.position}</span> : null}
              </div>
              <div className={s.info}>
                <p>Genre: </p>
                <input
                  type="radio"
                  name="genero"
                  value="male"
                  id="male"
                  onChange={handleInputChange}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  name="genero"
                  value="female"
                  id="female"
                  onChange={handleInputChange}
                />
                <label htmlFor="male">Female</label>
              </div>
            </fieldset>
          </form>
        </div>
        <div>
          <ShowInfo form={form} deletePosition={deletePosition} />
        </div>
      </div>
    </div>
  );
};
