import Bounded from "@/components/Bounded";
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
      <h1 className="mx-auto text-5xl font-medium text-slate-300 md:text-7xl">
        <PrismicText field={slice.primary.heading} />
      </h1>
      <PrismicRichText field={slice.primary.body} />
      <PrismicNextImage field={slice.primary.image} />
      <PrismicNextLink field={slice.primary.cta_link}>
        {slice.primary.cta_label}
      </PrismicNextLink>
    </Bounded>
  );
};

export default Hero;
