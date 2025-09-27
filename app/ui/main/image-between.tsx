import Image from 'next/image'

export default function ImageBetween({image} : {image: string}) {
    return (
        <section className="relative w-full h-screen">

            <img
              src={image}
              alt="NorisiCafea Hero"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />


            <div className="absolute inset-0 bg-black/40 z-10"></div>


            <div className="translate-x-10 translate-y-5 relative z-20 flex flex-col justify-center items-start h-full px-8 md:px-16 text-white max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Enjoy our delicious coffee</h1>
              <p className="text-lg md:text-xl mb-6">
                Discover our selection of espresso, cappuccino, and more.
              </p>
              <a href="#menu" className=" bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition">
                View Menu
              </a>
            </div>
          </section>
        );
}