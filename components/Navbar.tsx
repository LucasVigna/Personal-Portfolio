import React from "react";
import Button from "./Button";
import { HomeIcon, NotepadTextIcon, SchoolIcon } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <div
      className="w-full sm:flex-row flex-col flex items-center
          justify-center py-2 gap-3"
    >
      <Link href="#mystory">
        <Button>
          <HomeIcon className="h-4 w-4 mr-2" /> My Story
        </Button>
      </Link>

      <Link href="#mylessons">
        <Button>
          <NotepadTextIcon className="h-4 w-4 mr-2" />
          My Lessons
        </Button>
      </Link>

      <Link href="#aboutme">
        <Button>
          <SchoolIcon className="h-4 w-4 mr-2" />
          Who am I?
        </Button>
      </Link>
    </div>
  );
}

export default Navbar;
