import React from "react";
import Class from "./Class"
class About extends React.Component{
     constructor(){
      super();
      // console.log("parent constructor");
    
     }
     render(){
      // console.log("parent render");
      
      return (
        <div className="pt-[90.94px] w-full h-fit">
          <div class="bg-gray-100 py-12 w-full h-screen">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-base text-yellow-600 font-semibold tracking-wide uppercase">About Us</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Bringing Delicious Meals to Your Doorstep
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
        We are passionate about delivering fresh and tasty food from the best local restaurants straight to your home or office. Enjoy quick, easy, and contactless food delivery.
      </p>
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
              {/* <!-- Icon (can be replaced with an SVG or other icon) --> */}
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Fresh Ingredients</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            We work with local suppliers to ensure your meals are made with the freshest ingredients available.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
              {/* <!-- Icon (can be replaced with an SVG or other icon) --> */}
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17l4-4 4 4m0 0l-4-4-4 4m4-4V3" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Fast Delivery</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            Our delivery team ensures your meals arrive hot and fresh, right when you need them.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
              {/* <!-- Icon (can be replaced with an SVG or other icon) --> */}
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Wide Variety</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            Choose from a wide range of cuisines, from local favorites to international delicacies.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>

        </div>
      )
     }
}
export default About;