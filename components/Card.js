function Card({name, type, buttons, img}){
    return (    
    <div className=" pt-4">
        <div
        className="
        bg-white
        rounded-xl
        overflow-hidden
        border border-green-900 border-opacity-50
        py-2
        px-4
        "
        >
        {img}
        <div className="text-green-900 font-semibold text-[18px]">
                {name}
        </div>
        <div
            className="
            text-[12px]
            text-base text-body-color
            mb-1
            "
            >
            {type}
        </div>
        {/*
        <a
            onClick={() => setOpenMonth(!openMonth)}
            className="
            cursor-pointer
            w-full
            block
            text-base
            font-semibold
            text-green-900
            bg-transparent
            border border-[#D4DEFF]
            rounded-md
            text-center
            p-4
            hover:text-white hover:bg-green-400
            transition
            "
            >
        button
        </a>
        */}
        {buttons}
        </div>
        </div>)

}

export default Card;