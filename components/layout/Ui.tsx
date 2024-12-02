export default function Ui() {
  return (
    <div className={`text-white p-1 w-[50px] h-screen border-red-500 border-2`}>
      <div className="flex flex-col justify-center item-center pt-2">
        <div className="text-center">로</div>
        <ul className="w-full flex flex-col item-center justify-center mt-3 border-red-500 border-2 ">
          <li className="text-center">메</li>
          <li className="text-center">달</li>
          <li className="text-center">날</li>
          <li className="text-center">계</li>
        </ul>
      </div>
    </div>
  );
}
