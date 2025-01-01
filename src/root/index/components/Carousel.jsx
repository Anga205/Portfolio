import { createSignal, onCleanup, onMount } from "solid-js";

function Carousel() {
  const items = [
    { id: 1, image: "https://media.istockphoto.com/id/909908830/photo/microscope-with-lab-glassware.webp?s=2048x2048&w=is&k=20&c=Hb6okxk7lNAJ8XZU_ItW-tSkdflcxQXt0zAXETVzBkk=", caption: "Beautiful Nature" },
    { id: 2, image: "https://media.istockphoto.com/id/909908830/photo/microscope-with-lab-glassware.webp?s=2048x2048&w=is&k=20&c=Hb6okxk7lNAJ8XZU_ItW-tSkdflcxQXt0zAXETVzBkk=", caption: "Serene Landscape" },
    { id: 3, image: "https://media.istockphoto.com/id/909908830/photo/microscope-with-lab-glassware.webp?s=2048x2048&w=is&k=20&c=Hb6okxk7lNAJ8XZU_ItW-tSkdflcxQXt0zAXETVzBkk=", caption: "Majestic Mountains" },
  ];

  const [currentIndex, setCurrentIndex] = createSignal(0);
  const totalSlides = items.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  let interval;
  onMount(() => {
    interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
  });

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <div class="relative w-full max-w-3xl mx-auto">
      {/* Slides */}
      <div class="overflow-hidden rounded-lg">
        <div
          class="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex() * 100}%)` }}
        >
          {items.map((item) => (
            <div class="flex-none w-full">
              <img
                src={item.image}
                alt={`Slide ${item.id}`}
                class="w-full object-cover"
              />
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white text-sm py-1 px-3 rounded-md shadow-lg">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full shadow-md focus:outline-none"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full shadow-md focus:outline-none"
      >
        ❯
      </button>

      {/* Indicators */}
      <div class="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            onClick={() => setCurrentIndex(index)}
            class={`w-3 h-3 rounded-full ${
              currentIndex() === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
