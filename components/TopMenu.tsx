import Head from "next/head";
import * as ga from "../utils/google_analitycs";
import { useState } from "react";
import router from "next/router";
import Footer from "./Footer";

function TopMenu({ title, desc, ogtype, image, keywords, children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title}></meta>
        <meta name="description" content={desc}></meta>

        <meta property="og:type" content={ogtype}></meta>

        <meta property="og:url" content={"https://karyayudi.my.id"}></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:description" content={desc}></meta>
        <meta property="og:image" content={image}></meta>
        <meta name="og:image" content={image}></meta>
        <meta name="keywords" content={keywords} />
        <meta name="news_keywords" content={keywords} />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content={"Yudian Malik"} />
        <meta name="language" content="id" />
        <link
          rel="manifest"
          href="/manifest.json"
          crossOrigin="use-credentials"
        />

        <link
          rel="apple-touch-icon"
          sizes="48x48"
          href="assets/icons/icon-48x48.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="assets/icons/icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="icons-ce3ab881bd31f1efc59c9c227d8f6b7f/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="94x96"
          href="assets/icons/icon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="128x128"
          href="assets/icons/icon-128x128.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="assets/icons/icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="assets/icons/icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="assets/icons/icon-192x192.png"
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="@dasnoo/graffity-inferno"
        />

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://karyayudi.my.id/"></meta>
        <meta property="twitter:title" content={title}></meta>
        <meta property="twitter:description" content={desc}></meta>
        <meta property="twitter:image" content={image}></meta>
        <meta name="theme-color" content="#30150A" />
        <meta
          name="google-adsense-account"
          content="ca-pub-3431456264566520"
        ></meta>

        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3431456264566520"
          crossOrigin="anonymous"
        ></script>

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"
          rel="stylesheet"
        ></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-dart.min.js"></script>
      </Head>
      <div className="overflow-clip">
        {/* <MenuDarg /> */}
        {/* <div style={{ zIndex: "9" }} className="absolute inset-0 ">
          
        </div> */}
        <div className={`bg-red02 w-full flex fixed z-50`}>
          <div className="container h-16 mx-4 lg:mx-auto w-11/12 flex-row flex justify-between items-center">
            <div className="flex items-center justify-center">
              <div className="hidden lg:flex">
                <img
                  onClick={() => router.push("/")}
                  src="/logo.svg"
                  alt="ini logo bertulisan yudian"
                />
              </div>
              <div className="md:hidden">
                <button onClick={toggleDrawer}>
                  {isOpen ? (
                    <img src="/menu.svg" alt="menu" />
                  ) : (
                    <img src="/menu.svg" alt="menu" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex-row hidden md:flex">
              <MenuList
                onClick={() => {
                  ga.EvenClick("/#home");
                }}
                nameMenu="Home"
                href="/#home"
              />

              <MenuList
                onClick={() => {
                  ga.EvenClick("/blog");
                }}
                nameMenu="Blog"
                href="/blog"
              />
              <MenuList
                onClick={() => {
                  ga.EvenClick("/projects");
                }}
                nameMenu="My Projects"
                href="/projects"
              />
              <MenuList
                onClick={() => {
                  ga.EvenClick("/#about-me");
                }}
                nameMenu="About Me"
                href="/#about-me"
              />
              <MenuList
                onClick={() => {
                  ga.EvenClick("GassaKy");
                }}
                nameMenu="GassaKy"
                href="https://gassaky.web.id/"
              />
            </div>
          </div>

          <div
            className={`fixed top-0 left-0 w-64 h-full bg-red02 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">Menu</h2>
              <button onClick={toggleDrawer}>
                <img src="/menu.svg" alt="menu" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <MenuList
                onClick={() => {
                  ga.EvenClick("/#home");
                  toggleDrawer();
                }}
                nameMenu="Home"
                href="/#home"
              />
              <MenuList
                onClick={() => {
                  ga.EvenClick("/#blog");
                  toggleDrawer();
                }}
                nameMenu="Blog"
                href="/#blog"
              />
              <MenuList
                onClick={() => {
                  ga.EvenClick("/#myprojects");
                  toggleDrawer();
                }}
                nameMenu="My Projects"
                href="/#myprojects"
              />
              <MenuList
                onClick={() => {
                  ga.EvenClick("/#about-me");
                  toggleDrawer();
                }}
                nameMenu="About Me"
                href="/#about-me"
              />
              <MenuList
                onClick={() => ga.EvenClick("GassaKy")}
                nameMenu="GassaKy"
                href="https://gassaky.web.id/"
              />
            </div>
          </div>
        </div>
        <div className="">{children}</div>

        <Footer />
      </div>
    </>
  );
}

function MenuList({ nameMenu, href, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="text-putih font-bold text-xl pl-6 hover:text-red"
    >
      <a href={href}>{nameMenu}</a>
    </div>
  );
}

export default TopMenu;
