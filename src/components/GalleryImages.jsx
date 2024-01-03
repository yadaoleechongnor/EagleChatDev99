

const GalleryImages = ({ datas }) => {

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
         {datas?.map((img,index) =>(
            <img src={img} alt="" key={index} className="h-[14rem] w-full object-cover"/>
         ))}
    </div>
  );
};

export default GalleryImages;
