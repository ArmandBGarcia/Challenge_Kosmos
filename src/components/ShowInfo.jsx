import React from "react";
import s from "./styles/ShowInfo.module.css";

export const ShowInfo = ({ form, deletePosition }) => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <img src={form.image} alt={form.name} />
      </div>
      <div className={s.data}>
        <p className={s.info}>Name: </p>
        <p className={s.infoName}>{form.name}</p>
      </div>

      <div className={s.description}>
        <p className={s.info}>Description: </p>
        <p>{form.description}</p>
      </div>
      <div>
        <p className={s.info}>Position: </p>
        {form.position?.map((d) => (
          <div className={s.position}>
            <p className={s.namePosi}>{d}</p>
            <button onClick={() => deletePosition(d)}>❌</button>
          </div>
        ))}
      </div>
      <div className={s.data}>
        <p className={s.info}>Genero: </p>
        <p className={s.infoName}>{form.genero}</p>
      </div>
    </div>
  );
};
