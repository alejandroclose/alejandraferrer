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
    <div className="overflow-visible">
    <div className="font-montserrat relative bg-sand-100">
            <div
        className="lg:block lg:absolute lg:inset-0 w-2/5 bg-[url('/images/floral-hero.png')] bg-cover"
      ></div>
      <div className="relative pt-6 pb-16">
        <main className="mt-16 px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto lg:top-48 lg:left-28">
                  <img
                    className=""
                    src="/images/hero-model2.png"
                    alt=""
                  />
              </div>
              <div className="relative mx-auto lg:left-16">
                  <img
                    className=""
                    src="/images/hero-model1.png"
                    alt=""
                  />
              </div>
            </div>
            <div className="sm:text-center md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <div className="mt-1 block text-2xl tracking-tight font-extrabold w-4/6 ml-8">
                  <span className="block font-abril text-gray-900 font-normal">
                    Fashion & Graphic Design
                  </span>
                  <span className="block font-abril text-gray-900 font-normal">
                    Consultant
                  </span>
                </div>
              </h1>
              <div className="mt-3 ml-24 text-sm text-gray-500 sm:mt-5 w-5/12">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua ad ad non deserunt sunt.
              </div>
              <div className="mt-3 ml-24 text-base text-gray-500 sm:mt-5">
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
  </div>
  );
}
