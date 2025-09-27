

export default function LocationHero() {
  const locationString = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.704817326018!2d26.118336576145563!3d44.43921690124061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff31f0e00e07%3A0xd42b6e5faaf430ae!2sStrada%20Traian%20202%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sen!2sro!4v1758976097376!5m2!1sen!2sro";
  return (
    <>
      <header id="location" className="flex items-center bg-white dark:bg-gray-900 min-h-screen py-24">

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

  
              </div>
            </div>

            <div className="mt-6 flex w-full items-center justify-center lg:mt-12">
              <iframe className="border-2 border-gray rounded-2xl" src={locationString} width="700" height="550" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}