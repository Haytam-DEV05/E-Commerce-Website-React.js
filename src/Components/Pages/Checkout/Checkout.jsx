import { useCart } from "../../Context/CartContext";

export default function Checkout() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl md:text-[40px] font-semibold mb-6">Checkout</h1>

      {/* WRAPPER */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
        {/* ================= PRODUCTS ================= */}
        <div className="md:col-span-2 bg-gray-100 p-4 rounded-lg shadow overflow-x-auto">
          <table className="w-full min-w-150 md:min-w-full">
            <thead>
              <tr className="border-b text-sm md:text-base">
                <th className="py-3 text-left">Product</th>
                <th className="py-3 text-center">Qty</th>
                <th className="py-3 text-center">Action</th>
                <th className="py-3 text-center">Category</th>
              </tr>
            </thead>

            <tbody>
              {cart.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6">
                    Cart is empty 🛒
                  </td>
                </tr>
              )}

              {cart.map((p) => (
                <tr key={p.id} className="border-b text-sm md:text-base">
                  <td className="flex items-center gap-3 py-3">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain bg-white p-1 rounded"
                    />
                    <p className="line-clamp-2">{p.title}</p>
                  </td>

                  <td className="text-center">{p.qty}</td>

                  <td className="text-center">
                    <button
                      onClick={() => removeFromCart(p.id)}
                      className="text-red-600 text-lg"
                    >
                      ❌
                    </button>
                  </td>

                  <td className="text-center capitalize">{p.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= PAYMENT ================= */}
        <div className="bg-blue-600 text-white p-5 rounded-lg shadow flex flex-col gap-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Payment Method
            </h3>

            <label className="flex items-center gap-2 mb-2">
              <input type="radio" name="payment" />
              Credit Card
            </label>

            <label className="flex items-center gap-2 mb-4">
              <input type="radio" name="payment" />
              Paypal
            </label>

            <h3 className="font-semibold mb-2">Card Number</h3>
            <input
              type="text"
              placeholder="**** **** **** 1234"
              className="w-full p-2 rounded text-black mb-4 border border-white"
            />

            <h3 className="font-semibold mb-2">Expiration Date</h3>
            <input
              type="date"
              className="w-full p-2 rounded text-black border border-white"
            />
          </div>

          {/* TOTAL */}
          <div className="border-t border-blue-400 pt-4">
            <div className="flex justify-between text-lg mb-4">
              <span>Total</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>

            <button className="bg-blue-400 hover:bg-blue-500 transition w-full py-2 rounded font-semibold">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
