import './App.css'
// import { Application } from './components/application/application'
import { CounterTwo } from './components/counter-two/counterTwo'
// import { Counter } from './components/counter/counter'
// import { MuiMode } from './mui/mui-mode'
// import { Skills } from './components/skills/Skills'
// import { Users } from './components/users/Users'
import { AppProviders } from './providers/AppProviders'

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={['HTML', 'CSS']} /> */}
        {/* <Counter /> */}
        <CounterTwo count={1} />
        {/* <Users /> */}
        {/* <MuiMode /> */}
      </div>
    // </AppProviders>
  )
}

export default App