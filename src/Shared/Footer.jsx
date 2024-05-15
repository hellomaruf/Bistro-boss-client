function Footer() {
  return (
    <div>
      <footer className=" grid grid-cols-2">
        <div className="col-span-1 bg-gray-700 text-gray-100 p-10 pl-24">
          <h2 className=" text-2xl font-semibold">CONTACT US</h2>
          <div className="py-3 space-y-2 text-lg text-gray-300">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="col-span-1 bg-gray-800  p-10 pl-24">
          <h2 className="text-gray-100 text-2xl font-semibold">Follow US</h2>
          <p className="text-xl text-gray-300">Join us on social media</p>
          <div className="text-gray-100 py-3 text-3xl space-x-3">
            <i className="ri-facebook-box-fill"></i>
            <i className="ri-linkedin-box-fill"></i>
            <i className="ri-instagram-fill"></i>
            <i className="ri-twitter-x-line"></i>
          </div>
        </div>
      </footer>

      <footer className="footer footer-center p-4 bg-gray-900  text-gray-200">
        <aside>
          <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
