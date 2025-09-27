import Container from "../shard/Container";
import CardCustomer from "./CardCustomer";
import ResolvedTask from "./ResolvedTask";
import TaskStatus from "./TaskStatus";
const Cutomers = ({ services, handleTicket, ticket, resolved, handleCompleteTask}) => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
        <div className="lg:col-span-3 order-1 md:order-0">
          <h1 className="text-2xl font-semibold text-[#34485a]">
            Customer Tickets
          </h1>
          <div className="grid lg:grid-cols-2 gap-4 mt-4">
          {services.map((service) => (
            <CardCustomer 
            key={service.id} 
            service={service} 
            handleTicket={handleTicket}
            />
          ))}
          </div>
        </div>
        <div className="lg:col-span-1 space-y-4">
          <h1 className="text-2xl font-semibold text-[#34485a]">
            Task Status
          </h1>
            <TaskStatus ticket={ticket} handleCompleteTask={handleCompleteTask} />
          <ResolvedTask resolved={resolved} />
        </div>
      </div>
    </Container>
  );
};

export default Cutomers;
