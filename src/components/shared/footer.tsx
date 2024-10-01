import {
    FaTwitter,
    FaFacebookF,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-black py-6 px-12 desktop:px-24 tablet:mt-24'>
            <div className='mb-6'>
                <a
                    aria-label='Go to home page'
                    href='/'
                    className='-m-1.5 p-1.5 flex items-center'
                >
                    <img
                        width={238.19}
                        height={37.24}
                        src='/desktop-logo.png'
                        alt=''
                    />
                </a>
            </div>
            <hr className='my-8 border-white' />
            <div className='flex flex-col laptop:flex-row justify-between text-white text-xs'>
                <div className='grid laptop:grid-cols-4 gap-4 grid-cols-1 mb-6'>
                    <div>
                        <h2 className='font-bold'>BOURNEMOUTH</h2>
                        <ul className='font-anonymous'>
                            <li>Telephone House</li>
                            <li>Bournemouth, BH1 3NE</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold'>LONDON</h2>
                        <ul className='font-anonymous'>
                            <li>51 Eastcheap</li>
                            <li>London, EC3M 1 JP</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold'>WASHINGTON</h2>
                        <ul className='font-anonymous'>
                            <li>80M Street SE</li>
                            <li>Washington, DC 20003</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold'>FLORIDA</h2>
                        <ul className='font-anonymous'>
                            <li>7901 4th St N, STE 300</li>
                            <li>St. Petersburg FL 33702</li>
                        </ul>
                    </div>
                </div>
                <div className='mb-10'>
                    <span className='font-bold leading-[15px]'>Get Social</span>
                    <div className='flex mt-2'>
                        <a
                            href='https://twitter.com/3sidedcube'
                            aria-label='twitter'
                            target='_blank'
                        >
                            <FaTwitter className='h-6 w-6 text-white mr-2' />
                        </a>
                        <a
                            href='https://instagram.com/3sidedcube'
                            aria-label='instagram'
                            target='_blank'
                        >
                            <FaInstagram className='h-6 w-6 text-white mr-2' />
                        </a>
                        <a
                            href='https://facebook.com/3sidedcube'
                            aria-label='facebook'
                            target='_blank'
                        >
                            <FaFacebookF className='h-6 w-6 text-white mr-2' />
                        </a>
                        <a
                            href='https://www.linkedin.com/company/3-sided-cube'
                            aria-label='linkedin'
                            target='_blank'
                        >
                            <FaLinkedin className='h-6 w-6 text-white mr-2' />
                        </a>
                        <a
                            href='https://youtube.com/3sidedcube'
                            aria-label='youtube'
                            target='_blank'
                        >
                            <FaYoutube className='h-6 w-6 text-white mr-2' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex items-center flex-col text-sm text-white font-anonymous laptop:font-bold laptop:flex-row laptop:justify-between leading-[19px]'>
                <span>&#169; {new Date().getFullYear()} 3 sided cube</span>
                <span>Let&apos;s Build Tech For Good</span>
            </div>
        </footer>
    );
};
export default Footer;
