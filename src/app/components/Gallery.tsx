"use client";

const Gallery = ({ fetchHome }: { fetchHome: HomeType | null }) => {
  const images = fetchHome?.imageUrl || [];

  if (!images || images.length === 0) return null;
  return (
    <div className="flex flex-row justify-center items-center gap-10 my-12">
      <div className="flex">
        <img
          src={images[0]}
          alt="accommodation"
          className="w-[520px] h-[520px] object-cover"
        />
      </div>
      <div className="flex justify-end gap-10 w-[520px] flex-wrap">
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`accommodation image ${index + 1}`}
            className="h-60 w-60 object-cover"
          />
        ))}
      </div>
    </div>
  );
};
export default Gallery;
