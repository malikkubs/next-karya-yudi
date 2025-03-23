import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
  useEffect(() => {
    if (slug) {
      data_tutrial(slug);
    }
  }, [router.query, slug]);
  return (
    <TopMenu>
      <div className="px-4 pt-16 w-full lg:w-6/12 mx-auto">
        {data_a == null && (
          <div className="flex justify-center items-center h-screen">
            <div className="loader"></div>
          </div>
        )}
        {data_a !== null || data_a !== undefined ? (
          <div className=" w-full max-w-full prose-base prose no-select">
            <img className="m-2" src={data_a?.thumbnail} />
            <h3 className="m-0">
              <b>{data_a?.user?.name?.toUpperCase()}</b>
            </h3>
            <p className="m-0">
              {dayjs(data_a?.created_at).format("ddd DD MMM YYYY")}
            </p>
            <h2>{data_a?.title}</h2>
            <article
              className="w-full"
              dangerouslySetInnerHTML={{ __html: data_a?.article }}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </TopMenu>
  );
}
