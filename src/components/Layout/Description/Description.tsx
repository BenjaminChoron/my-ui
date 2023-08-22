import React from "react";

import styles from "./Description.module.css";
import { Prop } from "../../../Types";

export default function Description({
  description,
  propsList,
  example,
}: {
  description: string;
  propsList: Prop[];
  example: string;
}) {
  const [showDescription, setShowDescription] = React.useState(false);

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <>
      <button
        type="button"
        className={styles.button}
        onClick={handleShowDescription}
      >
        {showDescription ? "Hide" : "Show"} informations
      </button>
      <div
        className={styles.description}
        style={showDescription ? { display: "flex" } : { display: "none" }}
      >
        <h3 className={styles.description__title}>Description</h3>
        <p className={styles.description__text}>{description}</p>
        <h4 className={styles.description__subtitle}>Props</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {propsList.map((prop) => (
              <tr key={prop.name}>
                <td className={styles.table__name}>{prop.name}</td>
                <td className={styles.table__type}>{prop.type}</td>
                <td className={styles.table__description}>
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 className={styles.description__subtitle}>Usage</h4>
        <img
          className={styles.description__example}
          src={example}
          alt="usage exemple"
        />
      </div>
    </>
  );
}
