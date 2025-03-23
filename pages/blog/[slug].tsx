import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import APINew from "../../utils/Api";

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
    <div className=" prose-base prose no-select">
      <h3>{data_a?.title}</h3>
      <article dangerouslySetInnerHTML={{ __html: data_a?.article }} />
      <div>lah apan</div>
    </div>
  );
}
