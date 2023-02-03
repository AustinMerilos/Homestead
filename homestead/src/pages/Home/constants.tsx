import images from "../../assets";

interface BannerItem {
  image: {
    source: string;
    overlayLabel?: string;
    borderRadius?: string | number;
  };
  title: string;
  description?: string | ((...args: any[]) => string);
  button: string;
}

export const bannerSliderItems: BannerItem[] = [
  {
    image: {
      source: "",
    },
    title: "Rentals",
    description: "Newist rentals",
    button: "Click to see",
  },
  {
    image: {
      source: "",
    },
    title: "buy a property",
    description: "newiest property",
    button: "Click to see",
  },
];

export default {
  rentProperty: {
    image: {
      source: images.rentBanner,
    },
    title: "Need a place to rent?",
    description:
      "Come and look at all the avaible properties that are rentable in your area! ",
    button: "Search Renting",
    link: "/search?purpose=for-rent",
  },

  buyProperty: {
    image: {
      source: images.buyBanner,
    },
    title: "Looking to buy?",
    description:
      "Explore thousandes of our listed properties that are avaiable to buy!",
    button: "Search Buying",
    link: "/search?purpose=for-sale",
  },
} as const;
