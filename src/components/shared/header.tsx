import { useEffect } from 'react';
const Header = () => {
    const authToken = localStorage.getItem('token');
    useEffect(() => {
    }, [authToken]);

    return (
        <header className="bg-black mb-12">
            <nav className="flex items-center justify-between p-4" aria-label="Nominations">
                <a href="/" aria-label="Go to home page" className="-m-1.5 p-1.5">
                    <img
                        className="hidden tablet:flex"
                        src="/desktop-logo.png"
                        alt="Desktop Logo"
                        width="238.19"
                        height="37.24"
                    />
                    <img
                        className="flex tablet:hidden"
                        src="/mobile-logo.png"
                        alt="Mobile Logo"
                        width="40"
                        height="37"
                    />
                </a>

                <div className="flex">
                    {authToken ? (
                        <button
                            type="button"
                            className="leading-[30px] text-white font-anonymous mr-6"
                           
                        >
                            LOG OUT
                        </button>
                    ) : (
                        <a href="/account/login" aria-label="Login">
                            Login
                        </a>
                    )}
                    <button
                        aria-label="Your nominations"
                        type="button"
                        className="leading-[30px] text-white"
                    >
                        <span className="flex flex-1 justify-end font-anonymous">
                            Your Nominations 
                        </span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
