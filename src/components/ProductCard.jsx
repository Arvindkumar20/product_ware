export default function ProductCard({ product }) {
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-500 mt-1 mb-3">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-pink-600">₹{product.price}</span>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  