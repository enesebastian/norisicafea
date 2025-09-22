import Image from 'next/image'

export default function ImageBetween({image} : {image: string}) {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            <Image
                  src={image} // replace with your image
                  alt="Hero"
                  fill
                  className="object-cover py-23"
                  priority
            />
          </section>
        );
}