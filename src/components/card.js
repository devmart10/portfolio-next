import React from "react";
import Link from "next/link";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa \
          doloremque eligendi quisquam a nobis aut odio ea fugiat iste eum saepe \
          omnis sequi incidunt, suscipit dolorem, minus voluptatum tempore? \
          Officia deserunt cum, facilis dicta suscipit repellendus corporis. \
          Modi, nesciunt ipsa debitis consequatur temporibus nulla voluptas \
          totam natus quos perspiciatis minima.";

const Card = ({ title, href, children }) => {
  return (
    <section className="p-4 mb-4 border border-indigo-700 rounded-lg md:p-8">
      <Link href={href}>
        <a className="block mb-4 text-3xl font-bold text-teal-700">{title}</a>
      </Link>
      {children ? children : lorem}
    </section>
  );
};

export default Card;
