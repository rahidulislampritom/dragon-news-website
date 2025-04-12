import React from 'react';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LatestNews/LatestNews';
import Navbar from '../../Components/Navbar/Navbar';
import LeftNavbar from '../../Components/LayoutComponents/LeftNavbar/LeftNavbar';
import RightNavbar from '../../Components/LayoutComponents/RightNavbar/RightNavbar';

const HomeLayout = () => {
    return (
        <div className='max-w-6xl mx-auto border font-apply'>
            <header className='mb-19'>
                <section className='flex flex-col items-center justify-center mb-8'>
                    <Header></Header>
                </section>

                {/* latest news  */}
                <section className=''>
                    <LatestNews></LatestNews>
                </section>

                {/* navbar section  */}

                <nav>
                    <Navbar></Navbar>
                </nav>

            </header>


            <main className='grid grid-cols-12 mb-20'>
                <aside className='col-span-3 h-full'>
                    <LeftNavbar></LeftNavbar>
                </aside>

                <section className='col-span-6 border'>
                    <h2>middle</h2>
                </section>

                <aside className='col-span-3 '>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;