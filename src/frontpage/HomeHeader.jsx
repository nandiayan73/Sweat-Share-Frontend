import { CSSTransition } from 'react-transition-group';
import { useState,useEffect ,useRef} from 'react';

const HomeHeader=()=>{
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const toggleMenu = () => 
      {
        setIsOpen(!isOpen);
      };
  
      const handleClickOutside = (event) => 
      {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          !hamburgerRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };
    
      useEffect(() => 
      {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    return(<>
    	<header className="default-header">
			<div className="container">
				<div className="header-wrap">
					<div className="header-top d-flex justify-content-between align-items-center">
                        {/* Logo */}
						<div className="logo">
							<a href="/"><img style={{width:"25%"}}  className="logoImg"  src="images/Home/logo.png" alt="SweatShare"></img></a>
						</div>
                        {/* Header */}
                        <header className="header2">
                            <div className="menu-container">
                                <div
                                className="hamburger"
                                ref={hamburgerRef}
                                onClick={toggleMenu}
                                >
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                </div>
                                <CSSTransition
                                in={isOpen}
                                timeout={300}
                                classNames="menu"
                                unmountOnExit
                                >
                                <nav className="menu-content" ref={menuRef}>
                                    <ul>
                                    <li><a href="/login">Sign Up</a></li>
                                    <li><a href="/register">Login</a></li>                                  
                                    </ul>
                                </nav>
                                </CSSTransition>
                            </div>
                            </header>
					</div>
				</div>
			</div>
		</header>
    </>)
}
export default HomeHeader;