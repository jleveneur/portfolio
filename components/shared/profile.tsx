import { personalInfo } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Profile = () => {
  return (
    <section className="flex flex-col items-center gap-5 sm:flex-row sm:gap-0">
      <div className="flex flex-1 justify-center">
        <Image
          src="/assets/images/profile.png"
          alt="Profile"
          width={300}
          height={300}
          className="drop-shadow-[0px_10px_8px_rgba(124,58,237,0.25)] xl:h-1/2 xl:w-1/2"
        />
      </div>
      <div className="flex w-full flex-1 flex-col gap-1 sm:items-start">
        <p className="text-lg text-gray-500 dark:text-gray-600">
          {personalInfo.title}
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl">
          {personalInfo.firstName}{" "}
          <span className="text-primary">{personalInfo.name}</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-500">
          {personalInfo.description}
        </p>
        <div className="mt-4 flex gap-4">
          <Button variant="outline" className="flex-1 text-lg" asChild>
            <Link
              href="/assets/documents/JULIEN_LEVENEUR_CV.pdf"
              target="_blank"
            >
              Download CV
            </Link>
          </Button>
          <Button className="flex-1 text-lg" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
