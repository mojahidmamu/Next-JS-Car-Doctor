import Image from "next/image";
import React from "react";

export default async function ServiceDetailsPage({ params, item }) {
  const p = await params;
  return (
    <div>
      <section>
        <figure className="flex justify-center w-full relative">
          <Image
            src={"/public/assets/images/checkout/checkout.png"}
            width={1130}
            height={300}
            alt={"banner"}
          ></Image>
          <div className="absolute w-full h-full ">

          </div>
        </figure>
      </section>
      <p>ID:-- {p.id} </p>
      <p>{JSON.stringify(item)} </p>
    </div>
  );
}
