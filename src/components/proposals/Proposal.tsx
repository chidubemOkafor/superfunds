import { CREATE_FUNDING_EVENTS_QUERY } from "../../graphql/queries";
import { useGraphQLQuery } from "../../hook/useGraphQLQuery";
import ProposalCard from "./ProposalCard";
import { SkeletonCard } from "../ui/SkeletonCard";

const Proposal = () => {
  const { data, error, isLoading } = useGraphQLQuery(['createFundingEvents'], CREATE_FUNDING_EVENTS_QUERY, {}, import.meta.env.VITE_SUBGRAPH_URL)
  console.log(data)
  if(error) return <p>Error: {error as any}</p>
  return (
    <div>
        <p className='text-3xl font-bold py-10 text-center'>Proposals</p>
        {isLoading && <SkeletonCard/>}
        {data?.createFundingEvents.map((prop: any, index: any) => (
          <ProposalCard key={prop.id || index} data={prop}/>
        ))}
    </div>
  )
}

export default Proposal
