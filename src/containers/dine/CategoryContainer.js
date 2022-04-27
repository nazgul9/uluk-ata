import {useParams} from 'react-router-dom'

function CategoryContainer() {
  const params = useParams();

  return (
    <>

      <h1>Category Dine cat name: {params.category}</h1>

    </>
  );
}

export default CategoryContainer;
