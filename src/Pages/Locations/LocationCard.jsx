

function LocationCard({img,title,description,price}) {
  return (
    <div className='relative rounded-lg font-bold text-sm text-dark space-y-1'>
       <img src={img} alt="" />
       <h4>{title}</h4>
       <h6 className="text-sm text-ash font-normal">{description}</h6>
       <p>{price}</p>
       <button className='bg-[#FAFAFA] rounded-full font-bold text-xs text-[#18181B] absolute top-2 right-5  flex justify-center items-center gap-1 px-1 py-1'>
        <img src="Images/building.png" alt="" /> Building</button>
    </div>
  )
}

export default LocationCard