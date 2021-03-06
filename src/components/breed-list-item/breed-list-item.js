import React from "react";
import { Link } from "react-router-dom";
import s from "./breed-list-item.module.css";

const BreedListItem = ({ breed }) => (
  <>
    <Link className={s.breedLink} to={`/lebedev-studio/${breed}`}>
      {breed[0].toUpperCase() + breed.slice(1)}
    </Link>
  </>
);

export default BreedListItem;
