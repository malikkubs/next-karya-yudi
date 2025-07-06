import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-dart";

import APINew from "../../utils/Api";
import dayjs from "dayjs";
import TopMenu from "../../components/TopMenu";
import { Card } from "../../components/Myskill";

export default function blog() {
  const router = useRouter();
  const { slug } = router.query;
  const [data_a, setData_a] = useState([]);
  function data_tutrial() {
    APINew.get("/gassa-ky/tutorial", {})
      .then((res) => {
        setData_a(res.data.list_artikel);
        console.log(`jala ye ${res.data.list_artikel.reverse()}`);
      })
      .catch((err) => {
        console.log(err);
        console.log("====================================");
      });
  }
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
    <TopMenu subtitle="blog">
      <div className="px-4 pt-16 container  lg:w-11/12 w-full mx-auto">
        <p className=" text-center p-3 text-4xl font-bold">Blog</p>{" "}
        {(!data_a || (Array.isArray(data_a) && data_a.length === 0)) && (
          <div className="flex justify-center items-center h-screen">
            <div className="loader"></div>
          </div>
        )}
        <div className="flex flex-wrap  mx-0 lg:-mx-4 ">
          {data_a.map((data, i) => (
            <div key={i} className="p-4 w-full md:w-1/2 lg:w-1/3 ">
              <Card
                user={data.user.name}
                href={`/blog/${data.slug}`}
                created_at={data.created_at}
                text={data.title}
                desc={cleanContent(data.article)}
                img={data.thumbnail}
              />
            </div>
          ))}
        </div>
      </div>
    </TopMenu>
  );
}
