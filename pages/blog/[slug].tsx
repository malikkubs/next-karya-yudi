import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-dart";

import APINew from "../../utils/Api";
import dayjs from "dayjs";
import TopMenu from "../../components/TopMenu";

export default function blog() {
  const router = useRouter();
  const { slug } = router.query;
  const [data_a, setData_a] = useState<any>();
  function data_tutrial(slug) {
    APINew.get(`/gassa-ky/tutorial?publish=${slug}`, {})
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
    // console.log("asdcasdc", data.data);

    if (slug) {
      data_tutrial(slug);
    }
  }, [router.query, slug]);
  return (
    <TopMenu
      ogtype="article"
      image={data_a.data.thumbnail}
      subtitle={data_a.data.title}
      desc={cleanContent(data_a.data.article)}
    >
      <div className="px-4 pt-16 w-full lg:w-6/12 mx-auto">
        {!data_a ? (
          <div className="flex justify-center items-center h-screen">
            <div className="loader"></div>
          </div>
        ) : (
          <div className=" w-full max-w-full prose-base prose no-select">
            <img className="aspect-video w-full m-0" src={data_a?.thumbnail} />
            <div className="flex justify-between items-center">
              <p className="m-0">
                {data_a?.created_at &&
                  dayjs(data_a?.created_at).format("ddd DD MMM YYYY")}
              </p>
              <h3 className="m-0">
                <b>by: {data_a?.user?.name?.toUpperCase()}</b>
              </h3>
            </div>
            <h2>{data_a?.title}</h2>
            <article
              className="w-full"
              dangerouslySetInnerHTML={{ __html: data_a?.article }}
            />
          </div>
        )}
      </div>
    </TopMenu>
  );
}

// export async function getServerSideProps(context: any) {
//   const slug = context.query.slug || "";
//   try {
//     const res = await fetch(
//       `https://api.karyayudi.my.id/api/gassa-ky/tutorial?publish=${slug}`
//     );
//     const data = await res.json();
//     console.log("adddsc", data);

//     return {
//       props: {
//         data: data.data,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         data: [],
//       },
//     };
//   }
// }
