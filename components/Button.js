import React from "react";
import Link from "next/link";
import s from "./Button.module.scss";

export default function Button(props) {
  return (
    <Link href={"/market"}>
      <button className={s.startBtn} {...props}>
        START
      </button>
    </Link>
  );
}
