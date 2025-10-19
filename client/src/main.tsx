
import { createRoot } from 'react-dom/client'
import './index.css' 
import BuiltIn from './BuiltIn';
import LoginForm from './LoginForm';
import Hooks from './Hooks';
import UseMemoHooks from './UseMemoHooks';
import FetchJSON from './FetchJSON';
import FetchJSONSearch from './FetchJSONSearch';
createRoot(document.getElementById('root')!).render(
 // <StrictMode>
      //  <BuiltIn />  // Java built in functions
      //   <LoginForm /> // Login and signup modal screen
         //  <Hooks/>
        // <FetchJSON />
        <FetchJSONSearch />
      //  <UseMemoHooks />
 // </StrictMode>,
)
