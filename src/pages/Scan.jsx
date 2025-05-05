import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';

const skinTypes = [
  { id: 1, name: 'Oily', value: 'oily' },
  { id: 2, name: 'Dry', value: 'dry' },
  { id: 3, name: 'Combination', value: 'combination' },
  { id: 4, name: 'Sensitive', value: 'sensitive' },
  { id: 5, name: 'Normal', value: 'normal' },
];

const skinTypeSuggestions = {
  oily: ['✨ Oil-Free Foaming Cleanser', '🌿 Charcoal Clay Mask', '💧 Matte Finish Gel Moisturizer'],
  dry: ['🧴 Hydrating Cream Cleanser', '💦 Hyaluronic Serum', '🌹 Rich Night Cream'],
  combination: ['🌸 Balancing Cleanser', '🍃 Green Tea Toner', '🌼 Lightweight Moisturizer'],
  sensitive: ['🧼 Fragrance-Free Gentle Wash', '🪴 Aloe Vera Soothing Serum', '🍯 Barrier Repair Moisturizer'],
  normal: ['🌞 Daily Refresh Cleanser', '🌟 Vitamin C Brightening Serum', '🌻 Everyday Moisturizer'],
};

export default function BeautySuggestionForm() {
  const [selected, setSelected] = useState(skinTypes[0]);
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuggestions(skinTypeSuggestions[selected.value]);
  };

  return (
    <div className="min-h-screen bg-pink-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 border border-pink-200 dark:border-gray-700">
        <h2 className="text-3xl font-extrabold text-pink-600 dark:text-white text-center mb-6">
          Beauty Matchmaker
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="w-full">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white dark:bg-gray-700 py-2 pl-4 pr-10 text-left border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <span className="block truncate text-pink-700 dark:text-pink-300">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ChevronDown className="w-5 h-5 text-pink-500" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white dark:bg-gray-700 border border-pink-200 text-base shadow-lg focus:outline-none">
                    {skinTypes.map((type) => (
                      <Listbox.Option
                        key={type.id}
                        value={type}
                        className={({ active }) =>
                          `cursor-pointer select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-pink-100 text-pink-900' : 'text-gray-900 dark:text-white'
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {type.name}
                            </span>
                            {selected ? (
                              <span className="absolute left-3 inset-y-0 flex items-center text-pink-500">
                                <Check className="w-5 h-5" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-lg transition"
          >
            Show Recommendations
          </button>
        </form>

        {suggestions.length > 0 && (
          <div className="mt-6 bg-pink-100 dark:bg-gray-700 p-4 rounded-xl shadow-inner">
            <h3 className="text-lg font-semibold text-pink-700 dark:text-pink-200 mb-2">
              💖 Your Personalized Beauty Picks:
            </h3>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-100 space-y-1">
              {suggestions.map((product, idx) => (
                <li key={idx}>{product}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
