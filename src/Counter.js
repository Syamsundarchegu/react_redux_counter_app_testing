import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <section className="w-full h-screen flex justify-center items-center bg-gray-50">
      <div className="flex flex-col justify-center py-12 px-8 gap-6 border-red-400 border-2 rounded-lg shadow-lg bg-white">
        <h1 className="text-center text-2xl font-bold text-gray-800 py-2 rounded-lg bg-gradient-to-r from-orange-400 via-blue-500 to-green-300">
          Counter App
        </h1>
        <div className="flex gap-6 items-center">
          <button
            className="px-6 py-2 rounded-lg text-white font-semibold bg-orange-500 hover:bg-orange-600 transition-all"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span
            className="text-3xl font-bold text-pink-500 w-10"
            style={{ display: "inline-block" }}
          >
            {count}
          </span>
          <button
            className="px-6 py-2 rounded-lg text-white font-semibold bg-orange-500 hover:bg-orange-600 transition-all"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
