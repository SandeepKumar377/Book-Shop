import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import routes from './Routes'
import Menu from './components/Menu'


function AppRoutes(){
  return useRoutes(routes);
}

function App() {
  return (
    <>
      <Router>
        <div>
          <Menu/>
          <AppRoutes/>
        </div>
      </Router>
    </>
  )
}

export default App
