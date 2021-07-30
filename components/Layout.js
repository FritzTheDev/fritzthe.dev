import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  LibraryIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/dist/client/router";

const categories = [
  {
    name: "WTF is...",
    href: "/blog/wtf",
    description:
      "Introducing you to new languages, frameworks, & libraries ranging from the popular to the obscure.",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Things I've Built",
    href: "/blog/projects",
    description:
      "Posts that go over projects I've worked on. If you want to take a look at my portfolio, check these out.",
    icon: PencilAltIcon,
  },
  {
    name: "Tutorials",
    href: "/blog/tutorials",
    description:
      "Let me teach you something about programming while you're here! Don't worry - I won't test you on it!",
    icon: BookmarkAltIcon,
  },
  {
    name: "Blog Archives",
    href: "/blog",
    description: "All of my blog posts, sorted in reverse chronological order.",
    icon: LibraryIcon,
  },
];

const resources = [
  {
    name: "About",
    description: "Learn the story of my past & how I predict my future.",
    href: "/about",
    icon: SupportIcon,
  },
  {
    name: "Contact",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/contact",
    icon: BookmarkAltIcon,
  },
  {
    name: "Calendly",
    description: "Get on my calendar.",
    href: "https://calendly.com/fritzthedev",
    icon: CalendarIcon,
  },
  {
    name: "Twitter",
    description: "Understand how we take your privacy seriously.",
    href: "https://twitter.com/fritzthedev",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Layout = ({ children, title, description }) => {
  const { pathname } = useRouter();
  return (
    <div className="relative bg-gray-50">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={
            description ||
            "Hey, there - I'm Fritz. I'm a fullstack web developer who works mostly in Javascript."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FritzTheDev" />
        <meta name="twitter:creator" content="@FritzTheDev" />
        <meta
          property="og:url"
          content={"https://www.fritzthedev.com" + pathname}
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            description ||
            "Hey, there - I'm Fritz. I'm a fullstack web developer who works mostly in Javascript."
          }
        />
        <meta
          property="og:image"
          content="https://www.fritzthedev.com/social-card.jpeg"
        />
      </Head>
      <Popover className="relative bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link href="/" passHref>
                    <a className="text-4xl italic font-extrabold text-blue-600">
                      FritzTheDev
                    </a>
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex">
                  <Link href="/hire" passHref>
                    <a className="text-base font-medium mr-8 text-blue-600 hover:text-blue-900">
                      Need A Website?
                    </a>
                  </Link>
                  <Link href="/about" passHref>
                    <a className="text-base font-medium mr-8 text-gray-600 hover:text-gray-900">
                      About
                    </a>
                  </Link>
                  <Link href="https://twitter.com/fritzthedev" passHref>
                    <a className="text-base font-medium mr-8 text-gray-600 hover:text-gray-900">
                      Twitter
                    </a>
                  </Link>
                  <Link href="https://calendly.com/fritzthedev" passHref>
                    <a className="text-base font-medium mr-8 text-gray-600 hover:text-gray-900">
                      Calendly
                    </a>
                  </Link>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-600",
                            "mr-6 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          )}
                        >
                          <span>Development Blog</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-blue-600" : "text-gray-600",
                              "ml-1 h-5 w-5 text-gray600 group-hover:text-blue-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {categories.map((item) => (
                                  <Link href={item.href} key={item.name}>
                                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-blue-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <Link href="/contact" passHref>
                    <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                      Contact Me
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <Link href="/" passHref>
                        <a className="text-4xl outline-none italic font-extrabold text-blue-600">
                          FritzTheDev
                        </a>
                      </Link>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {categories.map((item) => (
                          <Link key={item.name} href={item.href} passHref>
                            <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-blue-600"
                                aria-hidden="true"
                              />
                              <span className="ml-3 text-base font-medium text-gray-900">
                                {item.name}
                              </span>
                            </a>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {resources.map((item) => (
                        <Link key={item.name} href={item.href} passHref>
                          <a className="text-base text-center font-medium text-gray-900 hover:text-gray-700">
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                    <div>
                      <Link href="/hire" passHref>
                        <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                          Need A Website? Start Here
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      {children}
    </div>
  );
};
