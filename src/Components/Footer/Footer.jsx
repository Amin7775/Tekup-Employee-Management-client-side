const Footer = () => {
  return (
    <div className="bg-custom_grey ">
      <footer className="footer p-10 container mx-auto text-base-content">
        <nav>
          <h6 className="footer-title text-2xl">Quick Links</h6>
          <a className="link link-hover text-lg">About Us</a>
          <a className="link link-hover text-lg">Our Team</a>
          <a className="link link-hover text-lg">Pricing Plans</a>
          <a className="link link-hover text-lg">Contact Us</a>
        </nav>
        <nav>
          <h6 className="footer-title text-2xl">Services</h6>
          <a className="link link-hover text-lg">UI/UX Design</a>
          <a className="link link-hover text-lg">Web Development</a>
          <a className="link link-hover text-lg">Digital Marketing</a>
          <a className="link link-hover text-lg">Cyber Security</a>
        </nav>
        <nav>
          <h6 className="footer-title text-2xl">Legal</h6>
          <a className="link link-hover text-lg">Terms of use</a>
          <a className="link link-hover text-lg">Privacy policy</a>
          <a className="link link-hover text-lg">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title text-2xl">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-lg">
                Enter your email address
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item text-lg"
              />
              <button className="btn bg-custom_primary_color text-white join-item text-lg hover:bg-custom_Dark transition-all duration-300 ease-in-out transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center p-4 text-base-content border-t-2">
  <aside>
    <p className="text-xl">Copyright © 2024 - All right reserved by Tekup</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;
