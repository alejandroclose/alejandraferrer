import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="font-montserrat">
            <div className="flex justify-center pb-4 h-32">
              <div>
                <div className="flex-1 flex items-center justify-center m-4">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="lg:block h-12 w-auto"
                      src="./logo_AFDC.png"
                      alt="Alejandra Ferrer Design Consultant"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="hidden lg:flex lg:space-x-8">
                    <div className="group flex flex-col text-gray-900 hover:text-coral hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                      <a
                        href="#"
                        className="inline-flex items-center px-1 pt-1 text-xs"
                      >
                        ABOUT
                      </a>
                      <div className="hidden group-hover:block text-center text-3xl leading-min hover:text-coral">·</div>
                    </div>

                    <div className="group flex flex-col text-gray-900 hover:text-coral hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                      <a
                        href="#"
                        className="inline-flex items-center px-1 pt-1 text-xs"
                      >
                        SERVICES
                      </a>
                      <div className="hidden group-hover:block text-center text-3xl leading-min hover:text-coral">·</div>
                    </div>
                    <div className="group flex flex-col text-gray-900 hover:text-coral hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                      <a
                        href="#"
                        className="inline-flex items-center px-1 pt-1 text-xs"
                      >
                        PORTFOLIO
                      </a>
                      <div className="hidden group-hover:block text-center text-3xl leading-min hover:text-coral">·</div>
                    </div>
                    <div className="group flex flex-col text-gray-900 hover:text-coral hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                      <a
                        href="#"
                        className="inline-flex items-center px-1 pt-1 text-xs"
                      >
                        CLIENTS
                      </a>
                      <div className="hidden group-hover:block text-center text-3xl leading-min hover:text-coral">·</div>
                    </div>
                    <div className="group flex flex-col text-gray-900 hover:text-coral hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                      <a
                        href="#"
                        className="inline-flex items-center px-1 pt-1 text-xs"
                      >
                        CONTACT
                      </a>
                      <div className="hidden group-hover:block text-center text-3xl leading-min hover:text-coral">·</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
