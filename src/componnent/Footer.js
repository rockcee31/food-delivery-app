const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help & Support</a></li>
            <li><a href="#" className="hover:underline">Partner with Us</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Cancellation & Refund</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
            <li><a href="#" className="hover:underline">Cookies Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              {/* Twitter Icon */}
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.31 4.31 0 001.88-2.37 8.54 8.54 0 01-2.72 1.04A4.28 4.28 0 0016 4a4.28 4.28 0 00-4.27 4.27c0 .33.04.66.11.97A12.14 12.14 0 013 5.34a4.28 4.28 0 001.32 5.71 4.27 4.27 0 01-1.94-.53v.05a4.28 4.28 0 003.43 4.2 4.29 4.29 0 01-1.93.07 4.28 4.28 0 004 2.97A8.57 8.57 0 012 19.87 12.09 12.09 0 006.29 21c7.6 0 11.75-6.29 11.75-11.76 0-.18 0-.37-.01-.55A8.45 8.45 0 0022.46 6z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              {/* Facebook Icon */}
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22 3H2c-.5 0-1 .5-1 1v16c0 .5.5 1 1 1h11v-7h-2v-3h2V9.9C13 7.6 14.4 6 16.9 6c1 0 1.9.1 2.1.1v2.4h-1.4c-1.1 0-1.3.5-1.3 1.2v1.8h2.7l-.3 3h-2.5v7H22c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              {/* Instagram Icon */}
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2.04c5.5 0 9.96 4.46 9.96 9.96 0 5.5-4.46 9.96-9.96 9.96A9.96 9.96 0 012 12c0-5.5 4.46-9.96 9.96-9.96zm0 1.9A8.06 8.06 0 003.9 12 8.06 8.06 0 0012 20.1 8.06 8.06 0 0020.1 12 8.06 8.06 0 0012 3.9zm0 2.48a5.58 5.58 0 110 11.16 5.58 5.58 0 010-11.16zM12 7a5 5 0 100 10A5 5 0 0012 7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 text-sm">
        © 2024 Swiggy Clone. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
