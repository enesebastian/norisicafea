

export default function LocationHero() {

  return (
    <>
      <header id="location" className="flex items-center bg-white dark:bg-gray-900 min-h-screen">

        <div className="container mx-auto px-6 ">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  Where can you find us? <br />
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error
                  laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.
                </p>

                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-400 rounded-lg lg:w-auto hover:bg-yellow-400 focus:outline-none focus:yellow-400">
                  Visit the menu
                </button>
              </div>
            </div>

            <div className="mt-6 flex w-full items-center justify-center lg:mt-12">
              <iframe className="border-2 border-gray rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.7810145289477!2d26.130225476763606!3d44.45816139999732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f8c16953f701%3A0x193759093311304c!2sRose%20Garden%20Residence%20Apartments!5e0!3m2!1sen!2sro!4v1758320339137!5m2!1sen!2sro" width="700" height="550" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}