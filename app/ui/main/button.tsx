

type ButtonProps = {
    name:string;
    href:string;
};
export default function Button ({name,href}: ButtonProps) {

    return (
        <a href={href} className=" bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition">
            {name}
          </a>
    );
}