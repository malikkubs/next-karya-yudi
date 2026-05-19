import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-dart";

import APINew from "../../utils/Api";
import dayjs from "dayjs";
import Cookies from "js-cookie";
import TopMenu from "../../components/TopMenu";

const PrjJson: any[] = require("../../json/myprojects.json");
export default function Project(data) {
  const router = useRouter();
  const { slug } = router.query;
  const [data_a, setData_a] = useState<any>();

  const [lang, setLang] = useState("en-EN");

  useEffect(() => {
    const savedLang = Cookies.get("language");

    // Jika cookie belum ada
    if (!savedLang) {
      Cookies.set("language", lang, {
        expires: 365,
      });
    } else {
      // Jika cookie sudah ada
      setLang(savedLang);
    }
  }, []);
  function data_tutrial(slug) {
    APINew.get(`/v2/gassaky/category/${slug}?lang_code=${lang}`, {})
      .then((res) => {
        setData_a(res.data);
        console.log(`jala ye ${res.data.title}`);
      })
      .catch((err) => {
        console.log(err);
        console.log("====================================");
      });
  }
  function addCopyButtons() {
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach((block) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("code-container");

      const button = document.createElement("button");
      button.classList.add("copy-btn");
      button.innerText = "Copy";

      block.parentNode.replaceChild(wrapper, block);
      wrapper.appendChild(block);
      wrapper.appendChild(button);

      button.addEventListener("click", () => copyCode(block, button));
    });
  }
  const cleanContent = (content) => {
    // Hapus <img>, <iframe>, <video> pakai regex
    const cleaned = content?.replace(
      /<img[^>]*>|<iframe[^>]*>.*?<\/iframe>|<video[^>]*>.*?<\/video>/gi,
      "",
    );

    // Hapus semua tag HTML yang tersisa
    const stripped = cleaned?.replace(/<\/?[^>]+(>|$)/g, "");

    // Potong jadi 50 kata dan tambahkan pesan subscribe
    const words = stripped?.split(" ");
    const shortDescription =
      words?.length > 50 ? words?.slice(0, 20).join(" ") : stripped;

    return shortDescription;
  };

  function copyCode(block, button) {
    const code = block.innerText;

    navigator.clipboard
      .writeText(code)
      .then(() => {
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 1500);
      })
      .catch((err) => console.error("Failed to copy code: ", err));
  }
  useEffect(() => {
    Prism.highlightAll();
    addCopyButtons();
  }, [data_a]);

  useEffect(() => {
    console.log("asdcasdc", data.data);

    if (slug) {
      data_tutrial(slug);
    }
  }, [router.query, slug]);
  return (
    <TopMenu
      ogtype="website"
      title={"karyayudi.my.id - " + data.data[0].title}
      desc={cleanContent(data.data[0].article)}
      image={PrjJson.find((item) => item.project === slug)?.logo}
      keywords="flutter, svelte, flame, pemrograman, coding, developer, aplikasi mobile, web development, game development, dart, javascript, frontend, backend, framework, tutorial flutter, belajar svelte, belajar flame, next karya yudi, karya yudi, karyayudi.id, yudian malik"
    >
      {/* <pre>{JSON.stringify(data.data[0].article, null, 2)}</pre> */}
      <div className="px-4 pt-16 w-full lg:w-6/12 mx-auto">
        {!data_a ? (
          <div className="flex justify-center items-center h-screen">
            <div className="loader"></div>
          </div>
        ) : (
          data_a.map((x) => (
            <div className=" w-full max-w-full prose-base prose no-select shadow-2xl p-4 my-4 bg-white rounded-xl">
              {x?.thumbnail != "https://api.karyayudi.my.id/" &&
                x?.thumbnail !=
                  "https://cdn-images-1.medium.com/v2/resize:fit:1000/1*ruym7QeT_aYyq_wO8E8bvw.jpeg" && (
                  <img className="aspect-video w-full m-0" src={x?.thumbnail} />
                )}
              <div className="flex justify-between items-center">
                <p className="m-0 whitespace-nowrap  text-xs lg:text-base">
                  {x?.created_at &&
                    dayjs(x?.created_at).format("ddd DD MMM YYYY")}
                </p>
                <p className="m-0 whitespace-nowrap text-xs lg:text-base">
                  <b>by: {x?.user?.name?.toUpperCase()}</b>
                </p>
              </div>
              <h4>{x?.title}</h4>
              <article
                className="w-full"
                dangerouslySetInnerHTML={{ __html: x?.article }}
              />
            </div>
          ))
        )}
      </div>
    </TopMenu>
  );
}

export async function getServerSideProps(context: any) {
  const slug = context.query.slug || "";
  try {
    const res = await fetch(
      `https://api.karyayudi.my.id/api/v2/gassaky/category/${slug}`,
    );
    const data = await res.json();
    console.log("adddsc", data);

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
}
