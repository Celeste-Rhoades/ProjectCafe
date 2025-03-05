const CoffeeCard = () => {
  return (
    <div className="">
      <div className="m-6 flex items-center justify-center text-5xl text-sky-900">
        Drinks
      </div>
      <div className="m-12 flex max-w-lg flex-1 flex-col bg-white p-4 shadow">
        <div className="flex justify-center text-3xl">Hot Drinks</div>

        <div className="flex justify-between">
          Latte <div>$5.50</div>
        </div>
        <div className="flex justify-between">
          Americano <div>$5.50</div>
        </div>
        <div className="flex justify-between">
          Cappucino <div>$5.50</div>
        </div>
        <div className="flex justify-between">
          Mocha <div>$5.50</div>
        </div>
        <div className="flex justify-between">
          Espresso<div>$5.50</div>
        </div>
      </div>
    </div>
  );
};
export default CoffeeCard;
