import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css"
import { connectToDatabase } from "../util/mongodb";
import Navbar from "./components/Navbar/Navbar";

export default function Home({ properties }) {
  return (

    <div className={styles.container}>
      <Head>
        <title>Create NEXT app</title>
      </Head>
            <Navbar />
      <React.Fragment>
        <div>
          {properties &&
            properties.map((property) => (
              <div>
                <h1>{property.name}</h1>
                <img src={property.image} alt="" />
                <h2>{property._id}</h2>
                <p>{property.description}</p>
                <a href={property.listing_url}>CLICK HERE</a>
                <h3>${property.price}</h3>
              </div>
            ))}
        </div>
      </React.Fragment>
    </div>

  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const data = await db
    .collection("listingsAndReviews")
    .find({})
    .limit(20)
    .toArray();
  const properties = JSON.parse(JSON.stringify(data));
  console.log(data);
  const filtered = properties.map((property) => {
    const price = JSON.parse(JSON.stringify(property.price));
    return {
      _id: property._id,
      name: property.name,
      image: property.images.picture_url,
      address: property.address,
      description: property.description,
      listing_url: property.listing_url,
      price: price.$numberDecimal,
    };
  });

  return {
    props: { properties: filtered },
  };
}
