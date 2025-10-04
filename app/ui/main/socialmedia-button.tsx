

export default function SocialmediaButton( {name, href} : {name :string; href: string;} ){
        return (

            <button
                onClick={() => window.open(href, "_blank")}
                className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-400 rounded-lg lg:w-auto hover:bg-yellow-400 focus:outline-none"
              >
                {name}
              </button>
        );
}