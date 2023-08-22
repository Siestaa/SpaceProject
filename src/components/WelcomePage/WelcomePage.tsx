import {Link} from "react-router-dom"

export const WelcomePage = () => {
  return (
    <>
     <h1 className='flex justify-center items-center'>Hello World</h1>
     <Link to="/tictac"><span>Start test</span></Link>
    </>
  );
}
