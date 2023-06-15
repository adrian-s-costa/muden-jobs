export default function Post(props){
  return(
    <div className={ `shadow rounded-md p-4 lg:w-[42rem] md:w-[42rem] w-[90%] w-full-sm m mx-auto mt-8 ${ props.hidden }`}>
    <div className="flex space-x-4">
      <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1">
          <p className="mt-[6px] "> Teste </p>

          <div className="flex gap-2">
          <button className=" flex justify-center rounded-xl text-[12px] pl-[10px] mt-[2px] pr-[10px] bg-blue-400">Programação</button>
          <button className=" flex justify-center rounded-xl text-[12px] pl-[10px] mt-[2px] pr-[10px] bg-blue-400">HTML</button>
          <button className=" flex justify-center rounded-xl text-[12px] pl-[10px] mt-[2px] pr-[10px] bg-blue-400">CSS</button>
          </div>

          <div className="">
            <div className="grid grid-cols-3 gap-4">
              <p className="w-[580px] mt-[20px] mb-[20px]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            </div>
            <div className="flex gap-1">
            <img className="max-w-[290px] h-[400px] rounded-lg" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1685118681/rice_tvoy36.jpg"/>
            <img className="max-w-[290px] h-[400px] rounded-lg" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1685118681/rice_tvoy36.jpg"/>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 