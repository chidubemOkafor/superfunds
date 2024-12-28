import { Skeleton } from "./skeleton"

export const  SkeletonCard:React.FC<{className?: string}> = ({className=''}) => {
  return (
    <div className={`flex flex-col space-y-3`}>
      <Skeleton className={`h-[20em] w-[40em] rounded-xl ${className}`} />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
