import { CiCalendar } from "react-icons/ci";
import { format } from "date-fns";
const CardCustomer = ({service, handleTicket}) => {
  return (
            <>
              <div onClick={() => handleTicket(service)} className="card cursor-pointer bg-base-100 shadow-sm">
                <div className="p-4 space-y-2">
                  <div className="flex flex-wrap items-center justify-between">
                    <h2 className="text-lg font-medium">{service.title}</h2>
                    <div className={`
                        ${service.status === "In Progress" ? "bg-[#F8F3B9]" : service.status === "Open" ? "bg-[#B9F8CF]" : "bg-red-100"}
                        gap-2 px-4 py-1 rounded-full flex items-center`}>
                      <p className={`${service.status === "In Progress" ? "bg-[#FEBB0C]" : service.status === "Open" ? "bg-[#02A53B]" : "bg-red-500"} size-3 rounded-full`}></p>
                      <p className={`${service.status === "In Progress" ? "text-[#9C7700]" : service.status === "Open" ? "text-[#0B5E06]" : "text-red-500"} font-medium`}>
                        {service.status}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#627382]">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-between text-[#627382]">
                   <div className="space-x-4 text-sm font-medium">
                    <span>{service.id}</span>
                    <span className={`uppercase ${service.priority === "Low" ? "text-[#02A53B]" : service.priority === "High" ? "text-red-500" : "text-[#FEBB0C]" }`}>{service.priority} PRIRITY</span>
                   </div>
                   <div className="space-x-4 flex items-center">
                     <span className="text-sm font-medium">{service.customer}</span>
                    <span className="flex items-center gap-2"><CiCalendar size={20} /> <span className="text-sm font-medium">{format(new Date(service.createdAt), "P")}</span></span>
                   </div>
                  </div>
                </div>
              </div>
            </>
  )
}

export default CardCustomer