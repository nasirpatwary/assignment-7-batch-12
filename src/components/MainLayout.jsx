import { Suspense } from "react"
import CustomerTickets from "./CustomerTickets"
import LoadingSpinner from "../shard/LoadingSpinner"
const loadCustomServices = async () => {
  const res = await fetch("/customers.json")
  return res.json()
}
const customersServices = loadCustomServices()
const MainLayout = () => {
  return (
    <div className="bg-[#f5f5f5] py-16">
        <Suspense fallback={<LoadingSpinner />}>
        <CustomerTickets 
        customersServices={customersServices}
         />
        </Suspense>
    </div>
  )
}

export default MainLayout