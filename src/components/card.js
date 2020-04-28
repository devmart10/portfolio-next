import React from "react";
import Link from "next/link";

const Card = ({ title, href = "", children }) => {
  return (
    <section className="mb-4 bg-white card">
      <Link href={href}>
        <a className="block mb-4 text-3xl font-bold text-primary">{title}</a>
      </Link>
      {children}
    </section>
  );
};

export default Card;
