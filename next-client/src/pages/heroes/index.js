import React, { useEffect, useState } from "react";
import Api from "@/services/apiService";

export async function getServerSideProps(context) {
  const heroes = await Api.getAllHeroes();

  return {
    props: {
      girlPower: ["Adi", "Shoval"],
      heroes,
    }, // will be passed to the page component as props
  };
}

export default function index(props) {
  return (
    <div>
      {props.girlPower.map((girl) => {
        return <h1>{girl}</h1>;
      })}

      {props.heroes.map((hero) => {
        return (
          <p key={hero.id}>
            Hero full name: {hero.first_name} {hero.last_name}
          </p>
        );
      })}
    </div>
  );
}
