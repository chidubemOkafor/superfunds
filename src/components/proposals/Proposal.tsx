import { CREATE_FUNDING_EVENTS_QUERY } from "../../graphql/queries";
import { useGraphQLQuery } from "../../hook/useGraphQLQuery";
import ProposalCard from "./ProposalCard";
import { SkeletonCard } from "../ui/SkeletonCard";
import { CreateFundingEventsData } from "../../interface/query-types/createFundingEventEventData";

const Proposal = () => { 
  const { data, error, isLoading } = useGraphQLQuery<CreateFundingEventsData>(
    ['createFundingEvents'], 
    CREATE_FUNDING_EVENTS_QUERY, 
    {}, 
    import.meta.env.VITE_SUBGRAPH_URL
  );

  if (!data?.createFundingEvents?.length) {
    return <p>No Proposal Created</p>;
  }

  if (error) return <p>Error: {error as any}</p>;

  return (
    <div className="sm:w-[40em] w-[90%]">
      <p className="text-3xl font-bold py-10 text-center">Proposals</p>
      {isLoading && <SkeletonCard />}
      {data.createFundingEvents.map((prop, index) => (
        <ProposalCard key={prop.id || index} data={prop} />
      ))}
    </div>
  );
};

export default Proposal
