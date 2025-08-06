import { Link } from 'react-router-dom';

export default function MainLayout({ children }) {
   return (
      <div>
         <header>
            <nav>
               <Link to="/">Home</Link>
               | <Link to="/about">About</Link>
               | <Link to="/class">Class Component</Link>
            </nav>
         </header>
         <main>{children}</main>
      </div>
   );
}
