

export const Article = ({img,number,title,text}) => {
  return (
    <article className="flex border h-[162px]
    md:w-[343px] md:flex-row">
        <div className="w-[100px] flex-none">
            <img src={img} alt="" />
        </div>
        <div className="pl-6">
            <p className="text-DarkGrayishBlue text-3xl mb-[18px] font-bold">{number}</p>
            <h2 className="font-bold mb-[18px] hover:text-SoftOrange cursor-pointer">{title}</h2>
            <p className="text-DarkGrayishBlue text-[16px]">{text}</p>
        </div>
    </article>
  )
}

 
