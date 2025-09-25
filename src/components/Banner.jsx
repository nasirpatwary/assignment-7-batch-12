import vector1 from "../assets/vector1.png";
import Container from "../shard/Container";
const Banner = ({ticket, resolved}) => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-4">
        {/* in progress */}
        <div className="flex gradient relative rounded-lg">
          <img className="w-44 lg:w-68" src={vector1} alt="" />
          <img className="w-44 lg:w-68 rotate-y-180 absolute right-0" src={vector1} alt="" />
          <div className="flex flex-col absolute inset-0 space-y-2 text-white items-center justify-center">
            <p className="text-2xl text-center">In-Progress</p>
            <h2 className="text-4xl font-semibold">{ticket.length}</h2>
          </div>
        </div>
        {/* resolved */}
        <div className="flex gradient2 relative rounded-lg">
          <img className="w-44 lg:w-68" src={vector1} alt="" />
          <img className="w-44 lg:w-68 rotate-y-180 absolute right-0" src={vector1} alt="" />
          <div className="flex flex-col absolute inset-0 space-y-2 text-white items-center justify-center">
            <p className="text-2xl">Resolved</p>
            <h2 className="text-4xl font-semibold">{resolved.length}</h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
