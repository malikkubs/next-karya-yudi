import Image from "next/image";
import Button, { Button2 } from "./Button";
import * as ga from "../utils/google_analitycs";
import { useEffect, useState } from "react";
import APINew from "../utils/Api";

function MySkill({ data }) {
  const [data_a, setData_a] = useState([]);
  function data_tutrial() {
    APINew.get("/gassa-ky/tutorial", {})
      .then((res) => {
        setData_a(res.data.list_artikel);
        console.log(`jala ye ${res.data.list_artikel}`);
      })
      .catch((err) => {
        console.log(err);
        console.log("====================================");
      });
  }

  // Fungsi untuk membersihkan konten
  const cleanContent = (content) => {
    // Hapus <img>, <iframe>, <video> pakai regex
    const cleaned = content?.replace(
      /<img[^>]*>|<iframe[^>]*>.*?<\/iframe>|<video[^>]*>.*?<\/video>/gi,
      ""
    );

    // Hapus semua tag HTML yang tersisa
    const stripped = cleaned?.replace(/<\/?[^>]+(>|$)/g, "");

    // Potong jadi 50 kata dan tambahkan pesan subscribe
    const words = stripped?.split(" ");
    const shortDescription =
      words?.length > 50 ? words?.slice(0, 20).join(" ") : stripped;

    return shortDescription;
  };

  useEffect(() => {
    data_tutrial();
  }, []);
  return (
    <div className="w-full container lg:mx-auto lg:w-11/12 pt-16">
      <div className="w-full py-6 lg:py-4 flex flex-col h-full">
        <div className="h-full min-h-screen">
          <p className=" text-center p-3 text-4xl font-bold">Blog</p>
          <div className="flex flex-wrap  mx-0 lg:-mx-4 ">
            {data_a.map((data, i) => (
              <div key={i} className="p-4 w-full md:w-1/2 lg:w-1/3 ">
                <Card
                  href={`/blog/${data.slug}`}
                  text={data.title}
                  desc={cleanContent(data.article)}
                  img={data.thumbnail}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function Card({ text, desc, img, href }) {
  return (
    <a href={href}>
      <div className=" flex-col  p-3 rounded-md flex  border-red border-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img className="aspect-square object-cover h-28" src={img} />
        <h3 className="text-xl font-bold text-red02 line-clamp-2 ">{text}</h3>
        <p className=" " dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
    </a>
  );
}

export default MySkill;
