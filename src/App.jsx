import LanguagesList from "./exercises/01-liste-map/LanguagesList"
import StudentsList from "./exercises/01-liste-map/StudentsList"
import ProductsList from "./exercises/01-liste-map/ProductsList"
import UserList from "./exercises/02-props/01-product-list-card/UserList"

function App() {

  return (  
    <>
      <h1> Esercizi React </h1>
        <h2> 01-exercises-liste-map </h2>
          <LanguagesList/>
          <StudentsList/>
          <ProductsList/>
        <h2> 02-exercises-props </h2>
          <UserList/>
    </>
  )
}

export default App
