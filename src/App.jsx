import LanguagesList from "./exercises/01-liste-map/LanguagesList"
import StudentsList from "./exercises/01-liste-map/StudentsList"
import ProductsList from "./exercises/01-liste-map/ProductsList"
import UserList from "./exercises/02-props/01-user-list-card/UserList"
import MovieList from "./exercises/02-props/02-movie-list-card/MovieList"
import UserStatusList from "./exercises/03-conditional-rendering/01-user-status/UserStatusList"
import ToggleContainer from "./exercises/04-useState/01-toggle-visibility/ToggleContainer"
import CounterContainer from "./exercises/04-useState/02-counter/CounterContainer"
import SynchronizedCounters from "./exercises/04-useState/03 — Synchronized Counters/SynchronizedCounters"
import IndependentCounters from "./exercises/04-useState/04-independent-counters/IndependentCounters"
import SelectableList from "./exercises/04-useState/05-selectable-list/SelectableList"
import AccordionList from "./exercises/04-useState/06-accordion/AccordionList"
import DelayedMessage from "./exercises/05-useEffect/01-delayed-message/DelayedMessage"
import AutoCounterControls from "./exercises/05-useEffect/02-auto-counter-controls/AutoCounterControls"
import UsersListApi from "./exercises/05-useEffect/03-users-list-api/UsersListApi"
import ProductsListApi from "./exercises/05-useEffect/04-products-list-api/ProductsListApi"
import UserNameForm from "./exercises/06-Forms/01-user-name-form/UserNameForm"
import ProductForm from "./exercises/06-Forms/02-product-form/ProductForm"
import EventBookingForm from "./exercises/06-Forms/03-event-booking-form/EventBookingForm"
import TodoList from "./exercises/06-Forms/04-todo-list/TodoList"

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
          <MovieList/>

        <h2> 03-exercises-conditional-rendering </h2>
          <UserStatusList/>

        <h2> 04-exercises--useState </h2>
          <ToggleContainer/>
          <CounterContainer/>
          <SynchronizedCounters/>
          <IndependentCounters/>
          <SelectableList/>
          <AccordionList/>

      <h2> 05-useEffect </h2>
        <DelayedMessage/>
        <AutoCounterControls/>
        <UsersListApi/>
        <ProductsListApi />

      <h2> 05-useEffect </h2>
      <UserNameForm/>
      <ProductForm/>
      <EventBookingForm/>
      <TodoList/>
    
    </>
  )
}

export default App
