import React from "react";
import photos from "./displayphoto";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
        margin: "0 17rem",
      }}
    >
      {photos?.map(({ img, id }) => (
        <Link href={`./photofeed/${id}`} key={id}>
          <Image src={img} alt="" width={300} height={300} />
        </Link>
      ))}
    </div>
  );
};

export default page;
