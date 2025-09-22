
export default function AboutUs () {
    return (
        <section id="aboutus" className=" lg:flex lg:justify-center min-h-screen py-24">
            <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                <div className="flex flex-col max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        How it all <span className="text-orange-400">started</span>...
                    </h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam
                        mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
                    </p>
                </div>
            </div>
        </section>
    );
}