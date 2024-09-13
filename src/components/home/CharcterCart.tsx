const CharcterCart = ({ name, image }) => {
    return (<div className="flex justify-center">
        <div className="bg-gray-100 p-6 rounded-lg flex flex-col justify-center items-center shadow-md">
            <img src={image} alt={name} className="rounded-lg" />
            <h1 className="text-lg font-bold mt-3">{name}</h1>
        </div>
    </div>);
}

export default CharcterCart;