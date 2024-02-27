"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
////////////////////////////////////////////////////////////

export default function HomePage({realTimePageReloader}) {
   
    return (
      <>
        <span onClick={()=>realTimePageReloader()}>Home</span>
        <span>emmy</span>
      </>
    );
  }
  