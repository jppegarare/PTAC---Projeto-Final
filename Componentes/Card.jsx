
export default function Card({video}){
    console.log(video)
    const videoUrl = video.url.slice(17)
    return(
        <div>
             <h4>{video.titulo}</h4>
             
            <iframe 
             width="320"
             height="240"
             src={`https://www.youtube.com/embed/${videoUrl}`}
             title="Titulo" 
             frameborder={0} 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             allowfullscreen>
             </iframe>


        </div>
           )}