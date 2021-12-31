{
  /* <svg
className="absolute top-0 right-1/2 transform translate-x-64 -translate-y-8"
width={640}
height={784}
fill="none"
viewBox="0 0 640 784"
>
<rect y={72} width={640} height={640} className="text-gray-50" fill="red" />
<rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
</svg> */
}

export default function Hero() {
  return (
    <div className="font-montserrat relative bg-sand-100 overflow-hidden">
      <div
        className="hidden lg:block lg:absolute lg:inset-0"
        aria-hidden="true"
      ></div>
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 px-4 sm:mt-24 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              {/* <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                  <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                    aria-hidden="true"
                  ></div>
                </button>
              </div> */}
            </div>
            <div className="sm:text-center md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <div className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-3xl w-3/6">
                  <span className="block font-abril text-gray-900 font-normal">
                    Fashion & Graphic Design
                  </span>
                  <span className="block font-abril text-gray-900 font-normal">
                    Consultant
                  </span>
                </div>
              </h1>
              <div className="mt-3 ml-16 text-base text-gray-500 sm:mt-5 w-3/6">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua ad ad non deserunt sunt.
              </div>
              <div className="mt-3 ml-16 text-base text-gray-500 sm:mt-5">
                <div className="mt-10 flex flex-row">
                  <span className="mr-3">
                    <img src="/location.png"></img>
                  </span>
                  BASED IN BARCELONA, SPAIN
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
