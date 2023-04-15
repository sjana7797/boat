import ProductCard from "./ProductCard";

type Props = {};

function DailyDeals({}: Props) {
  return (
    <section className="mx-auto max-w-7xl w-full my-5">
      <h2 className="text-primary-500 font-semibold text-2xl tracking-wide">
        Daily deals
      </h2>
      <div className="bg-amber-400/90 animate-pulse px-4 py-2 w-fit my-2 text-slate-800 font-medium rounded-md">
        ending in
      </div>

      <ul className="my-4 grid grid-cols-4 gap-3">
        {[5, 3, 2, 3].map((num, i) => {
          return <ProductCard key={i} />;
        })}
      </ul>
    </section>
  );
}

export default DailyDeals;
