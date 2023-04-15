import { XMarkIcon } from "@heroicons/react/20/solid";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-200 to-blue-200 via-violet-200 text-gray-900 py-2 px-4 text-sm font-medium flex gap-2 items-center justify-center cursor-pointer">
      <span className="uppercase">big price drop</span>
      <span>📢</span>
      <span>
        use coupon code SAVE200 for <span className="text-base">&#8377;</span>{" "}
        200 Discount
      </span>
    </div>
  );
}

export default Banner;
