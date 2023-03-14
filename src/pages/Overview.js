/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import banner2 from "../images/banner2.jpeg";

const Overview = () => {
  return (
    <div>
      <p className="text-center my-10 text-4xl text-[#143306] font-extrabold ">
        Overview
      </p>
      <div className="flex items-center justify-between mb-10 mx-40">
        <p className="w-[600px]">
          Shri Babu Singh Daddu Ji Ayurvedic Medical College & Hospital Founded
          by Shri Babu Singh Daddu Ji Educational Trust is situated at 8th
          milestone from fatehgarh city at farrukhabad kanpur state highway the
          college campus provides well accommodation facilities both ladies and
          gents seperately. The are herbal garden is being maintained which
          facilities the academic needs of student the huge library has in its
          store the medical books with around 7500 books and 350 titles. All the
          department are well equipped with chart models and as per the body
          norms. The aim of the institute is to make the institute a prime
          educational center of region so as to cater rural areas for the poor
          and humble people of india. A police chowki and nationalized bank is
          also setup in the college campus for safety purpose. The Institutes
          Building is a mordern marvel and a splendid examples of a well
          designed architectural structure. It has been planned in such a manner
          that it is easily accessible to any of the department. It also consist
          of a 1600 square feet green area of flora & fauna with various flowers
          & grass. There is a lift for the patient faculty and handicapped
          students. All rooms are well equipped with excellent furniture and
          multimedia facilities, which includes projector, while board,
          microphone and sound system.
        </p>
        <img src={banner2} style={{ width: 500, height: 400 }} />
      </div>
    </div>
  );
};

export default Overview;
