import { CREATE_FUNDING_EVENTS_QUERY } from "../../graphql/queries";
import { useGraphQLQuery } from "../../hook/useGraphQLQuery";
import ProposalCard from "./ProposalCard";
import { SkeletonCard } from "../ui/SkeletonCard";
import { CreateFundingEventsData } from "../../interface/query-types/createFundingEventEventData";

const Proposal = () => {
  const { data, error, isLoading } = useGraphQLQuery<CreateFundingEventsData>(['createFundingEvents'], CREATE_FUNDING_EVENTS_QUERY, {}, import.meta.env.VITE_SUBGRAPH_URL)
  console.log(data)
  if (data === undefined || data  === null || Object.entries(data).length === 0) {
    return
  }

  if(error) return <p>Error: {error as any}</p>
  return (
    <div className="sm:w-[40em] w-[90%]">
        <p className='text-3xl font-bold py-10 text-center'>Proposals</p>
        {isLoading && <SkeletonCard/>}
        {data.createFundingEvents.length === 0 && <p>No Proposal Created</p>}
        {data.createFundingEvents.length !== 0 && data.createFundingEvents.map((prop: any, index: any) => (
          <ProposalCard key={prop.id || index} data={prop}/>
        ))}
    </div>
  )
}

export default Proposal
