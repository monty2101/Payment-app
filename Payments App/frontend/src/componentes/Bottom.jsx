


export default function Bottom({label, link,val}) {

    return (
        

        <div className="flex text-center items-center justify-center">
            <div>
            {label} 
            </div>
            <a href={link} className="underline  p-2">
                {val}
            </a>
        </div>
    )
}