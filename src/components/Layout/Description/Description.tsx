import React from "react";

import styles from "./Description.module.css";
import { Prop } from "../../../Types";

export default function Description({
  description,
  propsList,
}: {
  description: string;
  propsList: Prop[];
}) {
  return (
    <div className={styles.description}>
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
              <td className={styles.table__description}>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
