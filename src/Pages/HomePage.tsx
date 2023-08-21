export default function HomePage() {
   return (
      <>
         <div className="h-[100vh] flex justify-center items-center flex-col gap-2 bg-slate-200">
            <h1 className="font-bold text-4xl text-green-500 cursor-default"> TODO LIST 📝 </h1>
            <ul className="list-disc ">
               <li>item1</li>
               <li>item2</li>
            </ul>


            <div className="flex gap-4 mt-4">
               <input type="text" placeholder="add todo item..." className="border-b-2 border-b-slate-400 h-8 bg-black bg-opacity-5   px-3  focus:outline-none"/>
               <button className="h-8 bg-green-400 w-20 p-2 rounded-lg hover:bg-green-500 flex items-center justify-center">ADD</button>
            </div>

         </div>
     </>
   )
 }