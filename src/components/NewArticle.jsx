

export const NewArticle = ({title,text}) => {
  return (
    <article className="h-[140px] border-b-2 border-DarkGrayishBlue py-last:border-none 
    lg:pt-4">
        <h2 className="cursor-pointer hover:text-SoftOrange text-[20px]
        lg:text-[16px]
        xl:text-[20px]">{title}</h2>
        <p className="text-[15px]">{text}</p>
    </article>
  )
}

 
