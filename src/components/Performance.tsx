import { useMediaQuery } from "react-responsive";
import { performanceImages, performanceImgPositions } from "../constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Performance = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
      if (isMobile) return;

      const tl = gsap.timeline({
        defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          end: "center center",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach((item) => {
        if (item.id == "p5") return;

        const selector = `.${item.id}`;

        const toVars: Record<string, number | string> = {};
        if (item.left !== undefined) toVars.left = `${item.left}%`;
        if (item.right !== undefined) toVars.right = `${item.right}%`;
        if (item.bottom !== undefined) toVars.bottom = `${item.bottom}%`;

        tl.to(selector, toVars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] },
  );

  return (
    <section ref={sectionRef} id="performance">
      <h2>Next-level graphics pefomance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map(({ id, src }, index) => (
          <img
            key={index}
            className={id}
            src={src}
            alt={`Peformance Image #${index}`}
          />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            {" "}
            gaming feels more immersive and realistic than ever.
          </span>
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
