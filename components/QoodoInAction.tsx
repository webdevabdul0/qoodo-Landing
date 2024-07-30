"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { hightlightsSlides } from "../public/constants/index";
import { pauseImg, playImg, replayImg } from "../public/utils";
gsap.registerPlugin(ScrollTrigger);

// Define the type for the video state
type VideoState = {
  isEnd: boolean;
  startPlay: boolean;
  videoId: number;
  isLastVideo: boolean;
  isPlaying: boolean;
};

const QoodoInAction = () => {
  return (
    <div>
      <div className="w-full px-[50px] py-[100px] bg-black flex-col justify-start items-center gap-[70px] inline-flex">
        <div className="text-center w-full flex flex-col justify-center items-center mb-[50px]">
          <h3 className="heading2 mb-[20px]">See Qoodo in Action</h3>

          <p className="subtitle text-[#E4ECFF] text-center">
            Watch our platform streamline your compliance processes.
          </p>
        </div>

        <div className="w-[1220px] justify-start items-end gap-5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-[25px] inline-flex">
            <div className="text-center text-white text-xl font-bold font-['Gilroy'] tracking-tight">
              Food Safety Tracking
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-[25px] inline-flex">
            <div className="text-center text-white text-xl font-bold font-['Gilroy'] tracking-tight">
              Work Safety Tracking
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-[25px] inline-flex">
            <div className="text-center text-white text-xl font-bold font-['Gilroy'] tracking-tight">
              Fire Safety Tracking
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-[25px] inline-flex">
            <div className="self-stretch text-center text-white text-xl font-bold font-['Gilroy'] tracking-tight">
              Compliance Monitoring
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-[25px] inline-flex">
            <div className="text-center text-white text-xl font-bold font-['Gilroy'] tracking-tight">
              Ease of Customization
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-center">
          <video
            src="/assets/videos/highlight-first.mp4"
            autoPlay
            muted
            loop
            className="max-w-[1000px] rounded-[50px]"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default QoodoInAction;
