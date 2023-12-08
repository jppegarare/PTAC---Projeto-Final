export default function Card({video}){
    const videoUrl = video.url.slice(17)
    return(
        <div>

            <iframe 
             width="320"
             height="1"
             src={`https://www.youtube.com/embed/${video.url.slice(videoUrl)}`}
             title="Titulo" 
             frameborder={0} 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             allowfullscreen>
             </iframe>

             <h4>{video.titulo}</h4>
        </div>

        
           
           )}