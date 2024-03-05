"use client";
// import { useState, useEffect } from "react";
import Image from "next/image";
// import Link from "next/link";
import { PageButton } from "@/components/site/websiteBody";
import { FaqItem } from "@/components/site/websiteBody";
import { Paragraph } from "@/components/site/websiteBody";
import {OtherPagesTitle} from "@/components/site/websiteBody";
////////////////////////////////////////////////////////////

export default function ContactUpPage() {
   
    return (
      <>
        <OtherPagesTitle
          title="Contact Us"
          ul="Contact Us"
        />
    
        <div className="w-[100%] relative top-[100%]">
          <div className="w-[100%] m-h-[300px] py-8 px-0">
            <div className="w-[86%] max-w-[1200px] m-auto flex flex-col gap-0">
              <div className="flex justify-center w-full gap-4">
                <div className="w-[30%] min-h-[200px] p-[20px] flex flex-col gap-3 items-center rounded-[5px] shadow-[_0px_3px_12px_rgba(0,0,0,0.1)]">
                  <div className="w-[70px] h-[70px] flex flex-row justify-center items-center p-5px rounded-[50px] bg-[#FF5100]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#fff" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h3 className="font-bold text-[18px] text-[#3a3939]">Email Address</h3>
                    <p className="text-[#3a3939]">info@eleadersnetwork.com</p>
                  </div>              
                </div>

                <div className="w-[30%] min-h-[200px] p-[20px] flex flex-col gap-3 items-center rounded-[5px] shadow-[_0px_3px_12px_rgba(0,0,0,0.1)]">
                  <div className="w-[70px] h-[70px] flex flex-row justify-center items-center p-5px rounded-[50px] bg-[#FF5100]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#fff" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h3 className="font-bold text-[18px] text-[#3a3939]">Phone Number</h3>
                    <p className="text-[#3a3939] leading-4 text-[14px]">0708-701-3213</p>
                    <p className="text-[#3a3939] text-[14px]">0813-408-4938</p>
                  </div>              
                </div>

                <div className="w-[30%] min-h-[200px] p-[20px] flex flex-col gap-3 items-center rounded-[5px] shadow-[_0px_3px_12px_rgba(0,0,0,0.1)]">
                  <div className="w-[70px] h-[70px] flex flex-row justify-center items-center p-5px rounded-[50px] bg-[#FF5100]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#fff" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h3 className="font-bold text-[18px] text-[#3a3939]">Head Office</h3>
                    <p className="text-[#3a3939] text-[14px]">Suite 213, Block A 2-4, Sura Complex, Lagos, Nigeria.</p>
                  </div>              
                </div>
                
              </div>
            </div> 
          </div> 
        </div>
      </>
    );
  }


 
  