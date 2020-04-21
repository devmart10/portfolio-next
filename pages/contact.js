import React from "react";
import Layout from "../src/components/layout";
import Card from "../src/components/card";

const Contact = () => {
  return (
    <Layout>
      <Card title="Contact" href="">
        <p className="mb-1">Devon Martin</p>
        <p className="mb-1">devmart10@gmail.com</p>
        <p className="mb-1">San Jose, CA</p>
        <p className="mb-1">(925) 348-2316</p>
        <hr className="my-4" />
        <p className="mb-1">devmart10@github.com</p>
        <p className="mb-1">@devmart10</p>
        <p className="mb-1">devon.martin@linkedin.com</p>
      </Card>
    </Layout>
  );
};

export default Contact;
