function Card({name, type, buttons, img}){
    return (    
    <div>
        <div
        className="
        bg-white
        rounded-xl
        z-10
        overflow-hidden
        border border-green-900 border-opacity-50
        shadow-pricing
        py-10
        px-8
        mb-10
        "
        >
        <span className="text-green-900 font-semibold text-lg mb-4">
            <h2 className="font-bold text-gray-800 mb-5 text-[42px]">
                {name}
            </h2>
        </span>
        {img}
        <p
            className="
            text-base text-body-color
            pb-8
            mb-8
            border-b border-[#F2F2F2]
            "
            >
            {type}
        </p>
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