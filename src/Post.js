export default function Post(props){
  return(
    <div className={ `border-[1px] border-inherit divide-solid rounded-md p-4 pr-[100px] lg:w-[42rem] md:w-[42rem] w-[90%] w-full-sm m mx-auto mt-8 relative ${ props.hidden }`}>
      <div className="flex flex-col">

        <div className="flex mb-[0px]">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <p className="mt-[8px] ml-[15px] "> Teste </p>
        </div>
          
        <div className="ml-[50px]">
          <div className="flex gap-2">
            <button className=" flex justify-center pt-[4px] pb-[4px] rounded-xl text-[12px] pl-[10px] mt-[2px] pr-[10px] bg-[#003fcb] text-white">Programação</button>
            <button className=" flex justify-center pt-[4px] pb-[4px] rounded-xl text-[12px] pl-[10px] mt-[2px] pr-[10px] bg-[#003fcb] text-white">HTML</button>
            <button className=" flex justify-center pt-[4px] pb-[4px] rounded-xl text-[12px] pl-[10px] mt-[2px] pr-[10px] bg-[#003fcb] text-white">CSS</button>
            <button className=" flex justify-center pt-[4px] pb-[4px] rounded-xl text-[12px] pl-[10px] mt-[2px] pr-[10px] border-[#003fcb]  divide-solid border-[1px]">📍 10 Km</button>
          </div>
          
          <div className="text-[#003fcb] text-5xl absolute right-[30px] top-[30px] hover:scale-125 duration-500">
            <span class="animate-ping absolute inline-flex h-2 w-2 top-[1px] right-[1px] rounded-full bg-sky-400 opacity-75"></span>
            <span class="absolute inline-flex rounded-full h-2 w-2 top-[1px] right-[1px] bg-sky-500"></span>
            <ion-icon name="chatbubble-outline" className="hover:scale-125 duration-500"></ion-icon>
          </div>
          <div className="">
            <div className="grid grid-cols-3 gap-4">
              <p className="w-[580px] mt-[20px] mb-[20px]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            </div>
            <div className="flex gap-1">
              <img className="max-w-[290px] h-[300px] rounded-lg" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1685118681/rice_tvoy36.jpg"/>
              <img className="max-w-[290px] h-[300px] rounded-lg" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1685118681/rice_tvoy36.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 