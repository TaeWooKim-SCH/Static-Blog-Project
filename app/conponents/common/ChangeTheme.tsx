'use client'

import { useEffect, useState } from "react";

import useChangeTheme from "@/app/libs/useChangeTheme";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

export default function ChangeTheme(): any {
  const [mounted, setMounted] = useState(false); // 마운트 때 처리를 안해주면 왜 해로 뜰까?
  const { isthemeDark, themeChangeLight, themeChangeDark } = useChangeTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div>
        {!mounted ? <></> : (
          !isthemeDark ? (
            <button
              className="h-9 w-9 transition-all hover:bg-gray-300 rounded-[5px] dark:hover:bg-[#262626]"
              onClick={themeChangeDark}
            >
              <SunIcon className="fill-yellow-400 mx-auto" width={30} height={30} />
            </button>
            ) : (
            <button
              className="h-9 w-9 transition-all hover:bg-gray-300 rounded-[5px] dark:hover:bg-[#262626]"
              onClick={themeChangeLight}
            >
              <MoonIcon className="fill-yellow-400 mx-auto" width={30} height={30} />
            </button>
          )
        )}
      </div>
  );
}