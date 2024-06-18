const Footer = () => {
  return (
    <div className="bg-custom_grey ">
      <footer className="footer p-10 container mx-auto text-base-content">
        <nav>
          <h6 className="footer-title text-2xl">Services</h6>
          <a className="link link-hover text-lg">Branding</a>
          <a className="link link-hover text-lg">Design</a>
          <a className="link link-hover text-lg">Marketing</a>
          <a className="link link-hover text-lg">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-2xl">Company</h6>
          <a className="link link-hover text-lg">About us</a>
          <a className="link link-hover text-lg">Contact</a>
          <a className="link link-hover text-lg">Jobs</a>
          <a className="link link-hover text-lg">Press kit</a>
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
              <button className="btn bg-custom_primary_color text-white join-item text-lg">
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
