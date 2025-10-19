
import { createRoot } from 'react-dom/client'
import './index.css' 
import BuiltIn from './BuiltIn';
import LoginForm from './LoginForm';

createRoot(document.getElementById('root')!).render(
 // <StrictMode>
      //  <BuiltIn />  // Java built in functions
          <LoginForm />
 // </StrictMode>,
)
