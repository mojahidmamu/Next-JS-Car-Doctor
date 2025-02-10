import Image from "next/image";
import React from "react";

export default async function ServiceDetailsPage({ params, item }) {
  const p = await params;
  return (
    <div>
      <section className="flex justify-center">
        <figure className="  relative">
          <Image
            src={"/public/assets/images/checkout/checkout.png"}
            width={1130}
            height={300}
            alt={"banner"}
          ></Image>
          <div className="absolute w-full h-full border-2 border-red-500 top-0">
            <div className="flex text-center mt-32 ps-16">
              <div>
                <h1 className="text-3xl font-bold text-green-400 "> Service Details </h1>
              </div>
            </div>
          </div>
        </figure>
      </section>
      <section>
        {/* <Image src={data.img} width={200} height={150} alt="Data.img"></Image> */}
      </section>
      <p>ID:-- {p.id} </p>
      <p>{JSON.stringify(item)} </p>
    </div>
  );
}
