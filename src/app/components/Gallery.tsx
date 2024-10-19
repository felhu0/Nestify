const Gallery = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-10 my-12">
      <div className="flex">
        <img
          src="/ian-keefe.jpg"
          alt="accommodation"
          className="w-[520px] h-[520px] object-cover"
        />
      </div>
      <div className="flex justify-end gap-10 w-[520px] flex-wrap">
        <img
          src="/clay-banks.jpg"
          alt="accommodation"
          className="h-60 w-60 object-cover"
        />
        <img
          src="/clay-banks-rP0OTFdVaak.jpg"
          alt="accommodation"
          className="h-60 w-60 object-cover"
        />
        <img
          src="/clay-banks-CKBiJ.jpg"
          alt="accommodation"
          className="h-60 w-60 object-cover"
        />
        <img
          src="/clay-banks-aBB2Il18e5o.jpg"
          alt="accommodation"
          className="h-60 w-60 object-cover"
        />
      </div>
    </div>
  );
};
export default Gallery;
