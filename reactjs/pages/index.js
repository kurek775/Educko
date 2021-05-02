import React from "react";
import { connectToDatabase } from "../util/mongodb";
import classes from "../styles/homePage.module.css";

export default function Home() {
  return (
    <div className={classes.section}>
      <h1>Home page</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const data = await db.collection("Users").find({}).toArray();
  console.log(data);
  const properties = JSON.parse(JSON.stringify(data));

  const filtered = properties.map((property) => {
    return {
      _id: property._id,
      email: property.email,
      uname: property.uname,
      password: property.password,
    };
  });

  return {
    props: { properties: filtered },
  };
}
