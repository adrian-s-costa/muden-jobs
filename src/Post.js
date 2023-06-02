export default function Post(props){
  return(
    <div className={ `shadow rounded-md p-4 lg:w-[42rem] md:w-[42rem] w-[90%] w-full-sm m mx-auto mt-8 ${ props.hidden }`}>
    <div className="flex space-x-4">
      <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          teste
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              teste
              teste
            </div>
            teste
          </div>
        </div>
      </div>
    </div>
  )
} 