import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

  return (
    <>
        <h3> { category } </h3>

        {/* si loading es true entonces muestra <p>Loading</p>, sino, no hace nada  */}
        { loading && <p>Loading</p>}

        <div className="card-grid"> 
            {
                images.map( img => (
                    <GifGridItem
                        key={ img.id }
                        // img={ img }
                        {...img}
                    />
                ))
            }
        </div>
    </>
  )
}
