import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
    
        <>
        <nav className=" border-gray-200 bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="next.svg" className="h-8"  alt="Flowbite Logo" width={32} height={32} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Gestion colis</span>
                </Link>
            
            </div>
        </nav>
        
        
        
       </>

    );
    }
    export default Navbar;