'use client'
import {ReactElement}from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () :ReactElement => {
    return(
        <div>
            <Link href="/">
            <Image src="/images/SouadLogo.png" alt="logo" height={96} width={96} priority />
            </Link>
          
        </div>
    )
}

export default Logo;