import { Accessibility, House, PawPrint, TreePine, Waves } from "lucide-react";

const FeaturedHomes = () => {
  return (
    <div className="flex flex-col justify-center mx-20 p-12">
      <div className="flex flex-col m-4">
        <h1 className="text-subheading">Featured</h1>
        <p className="text-body-desktop">
          Take a look at our most popular accommodations!
        </p>
      </div>
      <div className="flex justify-center gap-10 flex-wrap mt-10">
        <div className="flex flex-col w-96 border rounded-lg">
          <div>
            <img
              src="/megan-andrews.jpg"
              alt="accommodation"
              className="h-96 w-full rounded-t-lg object-cover"
            />
          </div>
          <p className="text-caption-desktop px-6 py-2 pt-4">
            Lovely cottage in quiet area
          </p>
          <span className="flex gap-2 px-6 py-2 pb-4">
            <TreePine />
            <Waves />
          </span>
        </div>
        <div className="flex flex-col w-96 border rounded-lg">
          <div>
            <img
              src="/frankie.jpg"
              alt="accommodation"
              className="h-96 w-full rounded-t-lg object-cover"
            />
          </div>
          <p className="text-caption-desktop px-6 py-2 pt-4">
            Rustic elegant apartment
          </p>
          <span className="flex gap-2 px-6 py-2 pb-4">
            <Accessibility />
          </span>
        </div>
        <div className="flex flex-col w-96 border rounded-lg">
          <div>
            <img
              src="/karsten-winegeart.jpg"
              alt="accommodation"
              className="h-96 w-full rounded-t-lg object-cover"
            />
          </div>
          <p className="text-caption-desktop px-6 py-2 pt-4">
            Secluded cabin in the woods
          </p>
          <span className="flex gap-2 px-6 py-2 pb-4">
            <TreePine />
            <PawPrint />
          </span>
        </div>
        <div className="flex flex-col w-96 border rounded-lg">
          <div>
            <img
              src="/aislinn-spaman.jpg"
              alt="accommodation"
              className="h-96 w-full rounded-t-lg object-cover"
            />
          </div>
          <p className="text-caption-desktop px-6 py-2 pt-4">Cozy apartment</p>
          <span className="flex gap-2 px-6 py-2 pb-4">
            <Accessibility />
            <PawPrint />
          </span>
        </div>
        <div className="flex flex-col w-96 border rounded-lg">
          <div>
            <img
              src="/ian-keefe.jpg"
              alt="accommodation"
              className="h-96 w-full rounded-t-lg object-cover"
            />
          </div>
          <p className="text-caption-desktop px-6 py-2 pt-4">
            Luxurious cabin on lake
          </p>
          <span className="flex gap-2 px-6 py-2 pb-4">
            <TreePine />
            <Waves />
            <House />
          </span>
        </div>
        <div className="flex flex-col w-96 border rounded-lg">
          <div>
            <img
              src="/aislinn.jpg"
              alt="accommodation"
              className="h-96 w-full rounded-t-lg object-cover"
            />
          </div>
          <p className="text-caption-desktop px-6 py-2 pt-4">
            Quaint cute apartment
          </p>
          <span className="flex gap-2 px-6 py-2 pb-4">
            <TreePine />
            <Waves />
          </span>
        </div>
      </div>
    </div>
  );
};
export default FeaturedHomes;
