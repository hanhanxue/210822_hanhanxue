

import NextImage from 'next/image'


const PlayMain = ( {images} ) => {
    return (  
    
    <main className={`section sectionDefault`}>
    <div className={`wrapper`}> 
    <div className={`letterbox_64_128`}>
    
    
        <div className={`tilesContainer textAlignCenter`}>
        
            {images.map((i, index) => (
                
            <div className={`nextImageDiv nextImageDivMargin`} key={index} >
                <NextImage 
                    src={`/content/play/${i.image}`} 
                    width={i.dimensions.width} 
                    height={i.dimensions.height} 
                    />
            </div>

            ))}
        
        </div>
        
    
    </div>
    </div>
    </main>
    
    
    );
}
 
export default PlayMain;