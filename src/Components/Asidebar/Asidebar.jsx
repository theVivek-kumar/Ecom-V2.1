import React from 'react';


function Asidebar() {
  return (
    <div>

      <aside class="w-64 h-full " aria-label="Sidebar">
        <div class=" h-full py-4 px-3 bg-gray-50  dark:bg-gray-800">

          <div className='flex justify-between'>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Filter</span>
            </a>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3 font-medium bg-blue-700 rounded p-2">clear All</span>
            </a>
          </div>


          <label for="default-range" class="block mb-6  text-lg font-bold text-gray-900 dark:text-gray-300">Price Range</label>
          <div class='flex justify-between  '>
            <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">500</label>
            <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">1000</label>
            <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">1500</label>
            <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">2000</label>
          </div>
          <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />


          <div class='mt-6'>
            <div class="flex items-center mb-4">
              <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                All fashion</label>
            </div>
            <div class="flex items-center mb-4">
              <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Shirt</label>
            </div>
            <div class="flex items-center mb-4">
              <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Denim</label>
            </div>
            <div class="flex items-center mb-4">
              <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">

                Hoodies</label>
            </div>
            <div class="flex items-center mb-4">
              <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Watch</label>
            </div>
          </div>
          <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div>
            <label for="default-range" class="block mb-6 font-bold text-lg  text-gray-900 dark:text-gray-300">Rating</label>
          </div>
          <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div>
            <div class="flex items-center mb-4 gap-2">
              <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">4 star and above
              </label>
            </div>
            <div class="flex items-center mb-4 gap-2">
              <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">3 star and above
              </label>
            </div>
            <div class="flex items-center mb-4 gap-2">
              <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">2 star and above
              </label>
            </div>
            <div class="flex items-center mb-4 gap-2">
              <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">1 star and above
              </label>
            </div>
          </div>
          <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div><label for="default-range" class=" text-lg block mb-6 font-bold mt-4  text-gray-900 dark:text-gray-300">Price Range</label>
          </div>
          <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div class="flex items-center mb-4 gap-2">
            <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
            <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">heigh to low
            </label>
          </div>
          <div class="flex items-center mb-4 gap-2">
            <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
            <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">low to heigh
            </label>
          </div>


        </div>

      </aside>

    </div>
  )
}

export default Asidebar