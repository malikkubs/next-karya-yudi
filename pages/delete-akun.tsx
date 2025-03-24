import { Dialog } from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import APINew from "../utils/Api";

export default function Delete() {
  const router = useRouter();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const { token } = router.query; // Ambil token dari query parameter
  const deleteAkun = () => {
    console.log("lah " + token);

    if (token !== undefined) {
      APINew.post("/logout", { id_token: token })
        .then((res) => {
          console.log("====================================");
          console.log(res);
          console.log("====================================");
        })
        .catch((err) => {
          console.log("lah");
          console.log(err?.errors);
          console.log("====================================");
          setErrors(err.errors);
        });
      setOpenDetail(true);
      console.log("Akun akan dihapus");
    } else {
      setOpenDetail(true);
    }
  };

  const [openDetail, setOpenDetail] = useState(false);
  return (
    <div>
      <Dialog
        open={openDetail}
        className="m-0"
        fullWidth={true}
        maxWidth={"md"}
        onClose={() => setOpenDetail(!openDetail)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="flex flex-col md:flex-row justify-center">
          {/* <div className="wfull lg:w-1/2 p-4 lg:p-0"> */}
          <p className="text-lg lg:text-2xl font-bold py-3 text-red02">
            {`${
              token === undefined
                ? "Akun Tidak terdeteksi Coba lagi"
                : "Akun Anda Akan dinonaktifkan 30 Hari Kedepan"
            }`}
            {/* Akun Tidak terdeteksi Coba lagi */}
          </p>
          {/* </div> */}
        </div>
      </Dialog>
      <p className="w-full text-center text-4xl font-bold">
        Halaman Delete Akun LimaKy by Karya Yudi
      </p>
      <div className="h-[58px]" />
      <div className="w-full flex justify-center">
        <button
          className="p-4 bg-green-600 text-white text-center"
          onClick={deleteAkun}
        >
          Klik To Delete Akun
        </button>
      </div>
    </div>
  );
}
