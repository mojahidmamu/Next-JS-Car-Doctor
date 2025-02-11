"use client";
import React from "react";
import Image from "next/image";

export default function LiginPage() {

  const handleLoginSubmit = (event) => {
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
              src={"../../../../public/assets/images/login/login.svg"}
              width={100}
              height={100}
              alt="logo"
            ></Image>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLoginSubmit} className="card-body">
              <h1 className="font-bold text-3xl text-center">Login</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-red-600">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
