import Image from "next/image";

interface pictureProps {
  picture: {
    id: number;
    attributes: {
      url: string;
      width: number;
      height: number;
      name: string;
    };
  }[];
}
const Banner = ({ picture }: pictureProps) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className={`h-full w-full fixed top-0 -z-10 after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-b from-black/50`}
      >
        <div className="block sm:hidden">
          <Image
            src={
              process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
              picture[0].attributes.url
            }
            alt={picture[0].attributes.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="sm:block xl:hidden">
          <Image
            src={
              process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
              picture[1].attributes.url
            }
            alt={picture[0].attributes.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="xl:block">
          <Image
            src={
              process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
              picture[2].attributes.url
            }
            alt={picture[0].attributes.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
