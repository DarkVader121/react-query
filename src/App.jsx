import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import ConditionalFetchingExample from './ConditionalFetchingExample'
import Dashboard  from './Dashboard'
import PollingExample from './PollingExample'
import NewPostForm from './NewPostForm'
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Dashboard/> */}
      {/* <PollingExample/> */}
      {/* <ConditionalFetchingExample /> */}
      {/* <NewPostForm/> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
