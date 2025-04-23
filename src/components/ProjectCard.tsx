const ProjectCard = ({ name, description, img }: any) => {

  return (
    <div className="rounded-md overflow-hidden shadow-md relative group mb-8 cursor-pointer">
      <img src={img} className="w-full h-64 object-cover" alt="" />

      <div className="absolute inset-0 backdrop-blur-xs flex flex-col justify-between px-4 py-4 group-hover:opacity-0 opacity-100 transition-opacity duration-700">
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-white text-3xl font-semibold text-center">{name}</h1>
        </div>

        <p className="text-white text-sm text-center">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
