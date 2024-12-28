import ProposalCard from "../../components/proposals/ProposalCard";
import AlertBox from "../../components/ui/AlertBox";
import { useParams } from "react-router";
import { CREATE_FUNDING_EVENTS_QUERY } from "../../graphql/queries";
import { useGraphQLQuery } from "../../hook/useGraphQLQuery";
import { SkeletonCard } from "../../components/ui/SkeletonCard";

const Proposal = () => {
  const { data, error, isLoading } = useGraphQLQuery(
    ["createFundingEvents"],
    CREATE_FUNDING_EVENTS_QUERY,
    {},
    import.meta.env.VITE_SUBGRAPH_URL
  );

  const { id } = useParams<{ id: string }>();
  const newData = data?.createFundingEvents?.find((item: any) => item.id === id);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[50em]">
        <AlertBox
          type="warning"
          description="This project has not been verified."
        />
        {isLoading && <SkeletonCard className='w-full mt-10'/>}
        {error && (
          <p className="text-red-500">
            Error loading proposals: {error.message}
          </p>
        )}
        {!isLoading && !newData && (
          <p className="text-gray-500">
            No proposal found for the given ID.
          </p>
        )}
        {newData && (
          <ProposalCard className="border-none w-full" type="page" data={newData} />
        )}
      </div>
    </div>
  );
};

export default Proposal;
