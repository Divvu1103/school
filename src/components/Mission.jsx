import React from "react";

const Mission = () => {
  return (
    <section class="text-gray-600 body-font my-2 bg-[#f1f1f1] py-4">
      <div class="container px-5 mx-auto flex flex-wrap">
        <div className="flex flex-col">
          <h2 className="font-semibold text-2xl underline text-[#133006]">Vision And Mission</h2> <br />
          <h2 className="text-xl">
            The Aims and objectives of the National Commission <br /> for Indian System
            of Medicine are to -
          </h2>
        </div>
        <div class="flex flex-wrap w-full">
          <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div class="flex relative pb-9">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center"></div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#143306] hover:bg-[#FFF000] transition ease-in inline-flex items-center justify-center text-white relative z-10">
                <p className="text-2xl">1</p>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                  To promote the growth and development in the field of
                  Ayurveda.
                </h2>
              </div>
            </div>
            <div class="flex relative pb-9">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#143306] hover:bg-[#FFF000] transition ease-in inline-flex items-center justify-center text-white relative z-10">
                <p className="text-2xl">2</p>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                  To produce graduates ih the discipline of Ayurveda.
                </h2>
              </div>
            </div>
            <div class="flex relative pb-9">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#143306] hover:bg-[#FFF000] transition ease-in inline-flex items-center justify-center text-white relative z-10">
                <p className="text-2xl">3</p>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                  To provide medical care facilities through the traditional
                  Ayurvedic system of medicine to the suffering humanity.
                </h2>
              </div>
            </div>
            <div class="flex relative pb-9">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#143306] hover:bg-[#FFF000] transition ease-in inline-flex items-center justify-center text-white relative z-10">
                <p className="text-2xl">4</p>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                  To provide and assist in providing services and facilities of
                  the highest order to the human society through the Ayurvedic
                  system of Medicine.
                </h2>
              </div>
            </div>
            <div class="flex relative pb-9">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#143306] hover:bg-orange-300 transition ease-in inline-flex items-center justify-center text-white relative z-10">
                <p className="text-2xl">5</p>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                  To conduct experiments and develop patterns of teaching in
                  under graduate education in Ayurveda.
                </h2>
              </div>
            </div>
            <div class="flex relative">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#143306] hover:bg-orange-300 transition ease-in inline-flex items-center justify-center text-white relative z-10">
                <p className="text-2xl">6</p>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                  The chief objective if this Hospital and Institute is to
                  provide adequate care. Treatment and education to its patients
                  and student.
                </h2>
              </div>
            </div>
          </div>
          <img
            class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="https://majorsdsu.com/assets/yoga-banner-4.jpeg"
            alt="step"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
