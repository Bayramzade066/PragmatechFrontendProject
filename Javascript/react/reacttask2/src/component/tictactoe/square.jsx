



export default function Square({value,onClick}){
    return <div onClick={onClick} className={`flex justify-center items-center border-2   h-[130px] cursor-pointer text-white text-5xl font-semibold border-fuchsia-900`}>
        {value}
    </div>
}