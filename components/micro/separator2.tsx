import {Separator} from "@/components/ui/separator";

export const Separator2 = () => {
  return(
      <div className="flex flex-row gap-3 justify-center my-4 ">
          <Separator className={"w-12 border-2 rounded-sm border-yellow-500"}/><Separator className={"w-2 border-2 rounded-sm border-yellow-500"}/>
      </div>
  )
}
