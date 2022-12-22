import './header.scss';

export const Header = () => {

    const menuItems = [
        { label: 'Header', href: '#header', id: 1 },
        { label: 'Buttons', href: '#footer', id: 2 },
        { label: 'Footer', href: '#buttons', id: 3 },
    ];

    return <header className="Header">
        <div className="container">
            <div className="row">
                <div className="col">👤</div>
                <div className="col">
                    <nav className="nav" >
                        <ul role="menu">
                            {
                                menuItems.map(function (menuItem) {
                                    console.log({ menuItem });

                                    return (
                                        <li key={menuItem.id} role="menuitem">
                                            <a href={menuItem.href}>{menuItem.label}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
}