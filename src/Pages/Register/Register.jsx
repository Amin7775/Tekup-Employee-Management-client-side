import { Link } from "react-router-dom";
import logoimg from "./../../assets/images/logo/Logo.svg";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

// image hosting
const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// console.log(imageHostingKey)
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const fileInputRef = useRef(null);
  const [success, setSuccess] = useState(true);
  const {createUser,updateUser,googleLogin} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    const name = form.name.value;
    const designation = form.designation.value;
    const salary = form.salary.value;
    const file = fileInputRef.current.files[0];
    // console.log({
    //   email,
    //   password,
    //   role,
    //   name,
    //   designation,
    //   salary,
    //   bankAccountNo,
    //   imageFile,
    // });

    //  first image hosting
    let imageUrl = "";
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const response = await fetch(imageHostingApi, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        imageUrl = data.data.url;
        setSuccess(true);
      } catch (error) {
        console.error("Error uploading image:", error);
        setSuccess(false);
      }
    }
    // now if imgURL data is success , send data to
    if (success) {
      console.log(imageUrl);
      createUser(email,password)
      .then(res=>{
        updateUser(name,imageUrl)
        .then(result=>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration Success",
                showConfirmButton: false,
                timer: 1500,
              })
        })
      })
    } else {
      console.log("Error");
    }
  };

  // google
  const handleGoogle = () => {
    googleLogin()
    .then(res=>{
        
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration Success",
            showConfirmButton: false,
            timer: 1500,
          })
    })
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 pt-32 lg:px-8  ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="">
          <img className="mx-auto h-10 w-auto" src={logoimg} alt="Tekup" />
        </div>
        <h2 className="mt-4 text-center text-3xl font-bold leading-9 tracking-tight text-custom_blue dark:text-gray-200">
          Register A New Account
        </h2>
      </div>

      <div className="mt-10 container mx-auto px-5 xl:px-1">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* name */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200 ">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter name"
                  className="block w-full rounded-md border-0 py-3 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
            {/* email */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200 ">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter Email"
                  className="block w-full rounded-md border-0 py-3 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* password */}
            <div>
              <div className="">
                <label
                  htmlFor="password"
                  className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  Password
                </label>
              </div>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-3 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 "
                />
              </div>
            </div>
            {/* role */}
            <div className="">
              <div className="">
                <label
                  htmlFor="password"
                  className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  Choose Role
                </label>
              </div>
              <select
                className="select select-bordered w-full mt-2"
                name="role"
                defaultValue={"Employee"}
                required
              >
                <option>Employee</option>
                <option>HR</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Designation */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200 ">
                Designation
              </label>
              <div className="mt-2">
                <input
                  id="designation"
                  name="designation"
                  type="text"
                  required
                  placeholder="Enter Designation"
                  className="block w-full rounded-md border-0 py-3 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
            {/* salary */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200 ">
                Salary
              </label>
              <div className="mt-2">
                <input
                  id="salary"
                  name="salary"
                  type="number"
                  required
                  placeholder="Enter salary "
                  className="block w-full rounded-md border-0 py-3 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bank account no */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200 ">
                Bank Account No
              </label>
              <div className="mt-2">
                <input
                  id="bank"
                  name="bank_account_no"
                  type="number"
                  required
                  placeholder="Enter Bank account number "
                  className="block w-full rounded-md border-0 py-3 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
            {/* image */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200 ">
                Image
              </label>
              <div className="mt-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  className="file-input file-input-bordered w-full "
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-custom_primary_color flex w-full lg:w-1/4 justify-center rounded-md bg-custom_blue px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-custom_Dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom_blue transition-all duration-300 ease-in-out dark:hover:bg-slate-500 lg:mt-5"
            >
              Register
            </button>
          </div>
        </form>
        {/* google register */}
        <p className="text-sm my-2.5 text-center text-slate-500">OR</p>
        <div className="flex justify-center">
          <button
            onClick={handleGoogle}
            className="flex w-full lg:w-1/4 justify-center rounded-md bg-[#0F9D58] px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-custom_Dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom_blue transition-all duration-300 ease-in-out dark:hover:bg-slate-500"
          >
            Login With Google
          </button>
        </div>

        <p className="mt-5 text-center text-sm text-gray-500">
          Already a member?{" "}
          <Link
            to={"/login"}
            className="font-semibold leading-6 text-custom_blue hover:text-custom_Dark dark:hover:bg-slate-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
