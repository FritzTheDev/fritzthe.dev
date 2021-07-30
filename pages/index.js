import Link from "next/link";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Fritz Johnson / Web Developer" description="Hey, there - I'm Fritz. I'm a fullstack web developer who works mostly in Javascript. Come say hi!">
      <div className="absolute w-screen">
        <main className="flex flex-col-reverse lg:block lg:relative">
          <div className="mx-auto max-w-7xl w-full text-center lg:pt-40 lg:pb-44 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block text-3xl lg:text-4xl xl:text-5xl">
                  Fritz is a...
                </span>
                <span className="block text-blue-600">Web Dev &</span>
                <span className="block">Freelancer &</span>
                <span className="block text-blue-600">Pretty Neat Guy</span>
              </h1>
              <p className="my-4 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-8 md:mb-12 md:max-w-3xl">
                <strong>Hey there - I'm Fritz Johnson.</strong> I help make people
                happy & productive by building software & websites. I write
                about my journey here as well. Stay for a while?
              </p>
              <div className="mt-5 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/hire" passHref>
                    <a className="animate-bounce w-full flex items-center justify-center shadow-lg px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Need A Website For Your Biz?
                    </a>
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link href="/blog" passHref>
                    <a className="w-full flex items-center justify-center shadow-lg px-8 py-3 border border-gray-200 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      Read My Blog
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-2 lg:mb-0 p-2 lg:p-0 flex justify-center min-h-full items-center w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-black">
            <img
              className="rounded-full object-fill w-7/12 lg:w-11/12 h-auto bg-gradient-to-r border-8 border-white from-blue-800 via-blue-600 to-blue-400"
              src="/fritz-portrait-square.png"
              alt="Portrait of Fritz"
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
