import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { SiGithub, SiGmail } from "react-icons/si";
import { FaSquarePhone } from "react-icons/fa6";
import CardContact from "./CardContact";

const Contacts = () => {
  return (
    <>
      <section id="contacts" className="bg-gray-50 py-28 lg:py-56">
        <div className="container mx-auto px-4 md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-36  items-center">
            <h2 className="text-rose-400 text-5xl lg:text-6xl xl:text-7xl font-semibold text-center  w-[25rem] place-self-center">
              GET IN TOUCH WITH ME
            </h2>

            <div className="flex flex-wrap justify-center">
              <CardContact
                link={
                  "https://www.linkedin.com/in/kyla-cassandra-porcalla-723033319/"
                }
                icon={FaLinkedin}
                color={"text-blue-700"}
                title={"LinkedIn"}
                name={"Kyla Cassandra Porcalla"}
              />
              <CardContact
                link={"https://github.com/kcassandraaa"}
                icon={SiGithub}
                color={"text-gray-800"}
                title={"GitHub"}
                name={"kcassandraaa"}
              />
              <CardContact
                link={"https://www.facebook.com/kylacassandra.7304/"}
                icon={FaFacebook}
                color={"text-blue-500"}
                title={"Facebook"}
                name={"Kyla Cassandra Porcalla"}
              />
              <CardContact
                link={"https://www.instagram.com/kcassandra_/"}
                icon={FaInstagram}
                color={"text-pink-500"}
                title={"Instagram"}
                name={"@kcassandra_"}
              />
              <CardContact
                icon={SiGmail}
                color={"text-yellow-500"}
                title={"Email"}
                name={"kylacassandraporcalla7@gmail.com"}
              />
              <CardContact
                icon={FaSquarePhone}
                color={"text-gray-800"}
                title={"Phone"}
                name={"+63 915 709 5310"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
