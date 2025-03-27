import Image from "next/image";
import Button, { Button2 } from "./Button";
import * as ga from "../utils/google_analitycs";

function Abaout({ body }: any) {
  return (
    <div className="w-full h-auto lg:h-screen container lg:w-11/12 mx-auto pt-16">
      <div className="py-6 lg:py-4 ">
        <div className=" p-0 lg:pr-8 flex items-center justify-between flex-row">
          <div className="w-full lg:w-2/3 flex flex-col p-4">
            <p className="text-red02 text-center text-4xl font-bold">
              About Me
            </p>
            <div className="flex flex-col">
              {body}
              {/* {parse(replaceFonts(body))} */}
            </div>
            <div className="flex pt-3">
              <Button2
                text="Hire Me"
                href={() => {
                  ga.EvenClickMenuApp("Button Hire Me");
                  window.open("https://wa.me/+628971675097");
                }}
              />
            </div>
          </div>
          <div className="foto relative hidden lg:flex">
            <Image
              className="w-full h-full object-cover absolute inset-0 z-0"
              src="/file.png"
              layout="fill"
              alt="seoarang sedang menunjukan kedua ibu jari tanganya"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abaout;
