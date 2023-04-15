import { Promise } from "@/typing/promises";
import fastDelivery from "../assets/images/icons8-fast-delivery-64.png";
import handBox from "../assets/images/icons8-hand-box-64.png";
import sendPackages from "../assets/images/icons8-send-package-64.png";
import walletChecked from "../assets/images/icons8-wallet-checked-64.png";
import invoice from "../assets/images/icons8-invoice-64.png";

export const promises: Promise[] = [
  {
    promise: "1 year warranty",
    image: handBox,
    id: 0,
  },
  {
    promise: "free 7 days replacement",
    image: sendPackages,
    id: 1,
  },
  {
    promise: "free shipping",
    image: fastDelivery,
    id: 2,
  },
  {
    promise: "secure payments",
    image: walletChecked,
    id: 3,
  },
  {
    promise: "gst billing",
    image: invoice,
    id: 4,
  },
];
