"use client";
import React, { useRef } from "react";
import Image from "next/image";

export default function RegisterPage() {
  // Alternative: Using ref for debugging if needed
  // const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget; // Ensures we are accessing the form
    console.log(form); // Debugging: Check if form is accessible

    const name = form.name?.value;
    const email = form.email?.value;
    const password = form.password?.value;

    console.log({ name, email, password });
  };

  return (
    <section>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Image
              src="/assets/images/login/login.svg" // Corrected Image Path
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="font-bold text-3xl text-center">Sign Up</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary bg-red-600">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
