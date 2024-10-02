'use client';
import { useCubeAcademyGetAllNominations } from '../../queries/cubeComponents';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [authToken] = useState<string | null>(localStorage.getItem('token'));
    const navigate = useNavigate();
    const { data } = authToken ? useCubeAcademyGetAllNominations({}) : { data: null };
    const queryClient = useQueryClient();
    const handleLogout = () => {
        localStorage.removeItem('token');
        queryClient.clear();
       navigate('/login')
    };
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
                            onClick={handleLogout}
                        >
                            LOG OUT
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="leading-[30px] text-white font-anonymous mr-6"
                           
                        >
                            LOGIN
                        </button>
                    )}
                    <button
                        aria-label="Your nominations"
                        type="button"
                        className="leading-[30px] text-white"
                    >
                        <span className="flex flex-1 justify-end font-anonymous">
                        {`Your Nominations (${data?.data?.length ?? 0})`}
                        </span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
