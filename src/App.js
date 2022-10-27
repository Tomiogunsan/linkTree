import React from 'react'
import pics from './assets/my cv pic.jpg'
import slack from './assets/slackLogo.jpg'
import git from './assets/gitLogo.jpg'
import zuri from './assets/zuri.png'
import ingressive from './assets/ingressiveLogo.jpg'

function App() {
  return (
    
    <div className='w-full h-full p-8 md:p-20  bg-gray-100'>
       <div className='flex flex-col justify-center items-center '>
        <img className='w-20 object-cover rounded-full' src={pics} alt='profile_img' />
        <p className='font-bold text-l py-4'id='twitter'>Pretomia</p>
        <p hidden id='slack'>Pretomia</p>
       </div>
{/* link section */}
       <div className='py-2'>
          <a href='https://training.zuri.team/' target="_blank" rel="noreferrer">
            <button id='btn_zuri'>Zuri team</button></a>
          </div>
          <div className='py-2'>
            <a href='https://books.zuri.team/' target="_blank" rel="noreferrer">
            <button id='books'>Zuri Books</button></a>
         </div>
       <div className='py-2'>
            <a href='https://books.zuri.team/python-for-beginners?ref_id=<pretomia>' target="_blank" rel="noreferrer">
            <button id='book_python'>Python Books</button></a>
        </div>
        <div className='py-2'>
            <a href='https://background.zuri.team' target="_blank" rel="noreferrer">
            <button id='pitch'>Here is a background check for coders</button></a>
        </div>
        <div className='py-2'>
            <a href='https://books.zuri.team/design-rules' target="_blank" rel="noreferrer">
            <button id='book_design'>Design Books</button></a>
        </div>

        {/* logo */}
        <div className='flex justify-center items-center pb-20 pt-4'>
          <img className='w-10'src={slack} alt='slack logo'/>
          <img className='w-8' src={git} alt='github logo'/>
        </div>

        {/* footer */}

        <footer className=' px-4'>
        <hr className=''/>
          <div className='grid lg:flex justify-between items-center'>
        
          <div className='flex justify-center items-center'>
            <img className='w-[120px]' src={zuri} alt='Zuri Logo'/>
            <p className='font-bold text-3xl'>Internship</p>
          </div>

          <div>
            <p>HNG Internship 9 Frontend Task</p>
          </div>

          <div>
            <img  className='w-[150px]' src={ingressive} alt='ingressive logo'/>
          </div>
          </div>
        </footer>


        </div>
 
        
        
    
    
  );
}

export default App;
