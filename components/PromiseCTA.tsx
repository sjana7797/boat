import { promises } from "@/configs/promiseCTA";

type Props = {};

function PromiseCTA({}: Props) {
  return (
    <div className="mx-auto max-w-7xl bg-primary-400 px-6 py-6 rounded-md flex justify-between items-center text-gray-900">
      {promises.map(({ id, image, promise }) => {
        return (
          <div
            key={id}
            className="text-lg uppercase font-medium flex gap-2 items-center"
          >
            <img src={image.src} className="w-8" />
            <h3>{promise}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default PromiseCTA;
