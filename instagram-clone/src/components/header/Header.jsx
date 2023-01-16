import './header.css';

function Header(){
    return (
        <div className='Header'>
           <img className='logo' src="./instagramlogo.png" alt="" />
           <div className="Header__icon">
               <img className='icon' src="./icon/add.png" alt="" />
               <img className='icon' src="./icon/heart.png" alt="" />
               <img className='icon' src="./icon/send.png" alt="" />
           </div>
        </div>
    );
}

export default Header;