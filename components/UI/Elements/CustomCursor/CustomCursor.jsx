"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./CustomCursor.module.scss";

export default function CustomCursor() {
  const container = useRef();

  useGSAP(
    () => {
      const cursor = container.current.querySelector(`.${styles.customCursor}`);

      if (!cursor) return;

      gsap.set(cursor, { x: -100, y: -100 });

      const handleMouseMove = (event) => {
        gsap.to(cursor, {
          x: event.clientX - 6,
          y: event.clientY - 6,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleClick = () => {
        gsap.to(cursor, {
          scale: 1.8,
          duration: 0.2,
          onComplete: () => gsap.to(cursor, { scale: 1, duration: 0.2 }),
        });
      };

      document.body.addEventListener("pointermove", handleMouseMove, {
        passive: true,
      });
      document.body.addEventListener("click", handleClick, { passive: true });

      return () => {
        document.body.removeEventListener("pointermove", handleMouseMove);
        document.body.removeEventListener("click", handleClick);
      };
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className={styles.customCursor}></div>
    </div>
  );
}
