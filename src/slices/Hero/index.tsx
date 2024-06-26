import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative flex flex-col items-center">
        <h1 className="text-balance text-5xl font-medium md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </h1>
        <div className="mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>
        <ButtonLink className="mt-6" field={slice.primary.cta_link}>
          {slice.primary.cta_label}
        </ButtonLink>
        <div className="glass-container mt-16 w-fit">
          <div className="hero__glow opacity-1 absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
          <PrismicNextImage field={slice.primary.image} height={600} />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
