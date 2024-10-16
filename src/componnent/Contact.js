const Contact = ()=>{
    return <div className="pt-[90.94px] w-full h-fit msb:pb-[400px]">
        <div class="bg-white py-12 h-screen">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-base text-yellow-600 font-semibold tracking-wide uppercase">Contact Us</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        We’re Here to Help
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
        Have questions or need support? Feel free to reach out to us, and we'll get back to you as soon as possible.
      </p>
    </div>

    <div class="mt-10 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div class="lg:col-span-1">
        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 class="text-lg font-medium text-gray-900">Contact Information</h3>
          <ul class="mt-4 space-y-4 text-gray-500">
            <li>
              <span class="font-semibold text-gray-900">Address:</span>
              <p>123 Food Street, Gourmet City, FC 12345</p>
            </li>
            <li>
              <span class="font-semibold text-gray-900">Phone:</span>
              <p>(123) 456-7890</p>
            </li>
            <li>
              <span class="font-semibold text-gray-900">Email:</span>
              <p>support@fooddelivery.com</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="lg:col-span-2 mt-12 lg:mt-0">
        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 class="text-lg font-medium text-gray-900">Send Us a Message</h3>
          <form action="#" method="POST" class="mt-6 space-y-4">
            <div>
              <label htmlFor="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" required />
            </div>
            <div>
              <label htmlFor="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" required />
            </div>
            <div>
              <label htmlFor="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50" required></textarea>
            </div>
            <button type="submit" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

   
  </div>
</div>

    </div>
}
export default Contact;