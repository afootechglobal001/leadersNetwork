"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
////////////////////////////////////////////////////////////

export default function AboutUpPage({realTimePageReloader}) {
   
    return (
      <>
        <span onClick={()=>realTimePageReloader()}>About Us</span>
      </>
    );
  }
  