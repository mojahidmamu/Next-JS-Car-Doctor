import Image from "next/image";
import React from "react";

export default function footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 bg-black text-white">
      <aside>
        <Image
          src={"/assets/logo.svg"}
          width={80}
          height={60}
          alt="Website Logo"
        ></Image>

        <p>
          Edwin Diaz is a software and web <br />
          technologies engineer, a life coach <br /> trainer who is also a
          serial .
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">About us</a>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </nav>
    </footer>
  );
}
