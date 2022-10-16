import CategoryItem from "../category-item/category-item.component"
import "./directory.scss"


const Directory = ({categories}) =>{
    return(
        <div className='categories-container'>
        {
       categories.map((categories) =>{
        return  <CategoryItem key={categories.id} container={categories}/>
 
       })
        }
 
       </div>
    )
}

export default Directory;