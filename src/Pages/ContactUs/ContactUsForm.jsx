import { FaLocationPin } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

const ContactUsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const message = form.message.value;
    console.log(email,message)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-1 lg:my-20 gap-5 lg:gap-20">
      {/* text */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Let's build an awesome <br />
          project together
        </h1>
        <p className="text-xl md:text-2xl mt-4 md:mt-6 ">
          At our IT solution company, we are committed to exceptional customer
          service and support. If you are experiencing technical difficulties or
          need assistance with
        </p>
        <div className="border-2 border-x-0  grid grid-cols-2 mt-5 md:mt-10 p-5">
          <div className="border-r-2 flex flex-col justify-center items-center">
            <FaLocationPin className="text-custom_primary_color text-2xl"></FaLocationPin>
            <p className="text-2xl font-semibold mt-2">Address</p>
            <p className="text-xl text-center mt-2">
              199/ka, Gabtoli, Dhaka, Bangladesh
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <IoMailSharp className="text-custom_primary_color text-2xl"></IoMailSharp>
            <p className="text-2xl font-semibold mt-2">Contact</p>
            <p className="text-xl text-center mt-2">tekup@gmail.com</p>
          </div>
        </div>
      </div>
      {/* form */}
      <div className=" mt-10 w-full border p-6 lg:p-10 ">
        <h1 className="text-3xl font-semibold">Fill The Contact Form</h1>
        <p className="mb-4 mt-3 text-xl">Feel free to contact with us, we don't spam your email</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* email */}
          <div>
            <label className="block text-xl font-medium leading-6 text-gray-900 ">
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
                className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
              />
            </div>
          </div>
          {/* password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="message"
                className="block text-xl font-medium leading-6 text-gray-900 "
              >
                Message
              </label>
            </div>
            <div className="mt-2">
              <textarea
                id="message"
                rows={5}
                name="message"
                type="text"
                placeholder="Enter Message"
                required
                className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 "
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn w-full bg-custom_primary_color text-white text-xl hover:bg-custom_Dark transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
