import { Promise } from "@/typing/promises";
import {
  ShieldCheckIcon,
  ArrowPathIcon,
  TruckIcon,
  CreditCardIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";

const className = "w-8 text-white";

export const promises: Promise[] = [
  {
    promise: "1 year warranty",
    Icon: <ShieldCheckIcon className={className} />,
    id: 0,
  },
  {
    promise: "free 7 days replacement",
    Icon: <ArrowPathIcon className={className} />,
    id: 1,
  },
  {
    promise: "free shipping",
    Icon: <TruckIcon className={className} />,
    id: 2,
  },
  {
    promise: "secure payments",
    Icon: <CreditCardIcon className={className} />,
    id: 3,
  },
  {
    promise: "gst billing",
    Icon: <CurrencyRupeeIcon className={className} />,
    id: 4,
  },
];
