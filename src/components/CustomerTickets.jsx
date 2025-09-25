import { use, useState } from "react";
import Cutomers from "./Cutomers";
import Banner from "./Banner";
import { toast } from "react-toastify";

const CustomerTickets = ({ customersServices }) => {
  const customers = use(customersServices);
    const [services, setServices] = useState(customers)
    const [ticket , setTicket ] = useState([])
    const [resolved , setResolved ] = useState([])
    const handleTicket = (service) =>{
      setTicket([...ticket, service])
      toast.success("In Progress!")
    }
  const handleCompleteTask = (id) => {
    const remaining = ticket.filter(item => item.id !== id)
    const task = ticket.filter(item => item.id === id)
    const remainingServices = services.filter(item => item.id !== id)
    setResolved([...resolved, ...task])
    setTicket(remaining)
    setServices(remainingServices)
    toast.success("Completed!")
  }
  return (
    <>
     <Banner ticket={ticket} resolved={resolved} />
      <Cutomers
        services={services}
        handleTicket={handleTicket}
        ticket={ticket}
        resolved={resolved}
        handleCompleteTask={handleCompleteTask}
      />
    </>
  );
};

export default CustomerTickets;
