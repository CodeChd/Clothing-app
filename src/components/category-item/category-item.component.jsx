import './category-item.scss'

const CategoryItem = ({container}) =>{
    return(
        <div className='category-container'>
          
        <div 
        className="background-image" 
      
        style={{
          backgroundImage : `url(${container.imageUrl})`
        }}
        />
    
       <div className='category-body-container'>
         <h2>{container.title}</h2>
         <p>Shop Now</p>
       </div>
     </div>
    )
}

export default CategoryItem;