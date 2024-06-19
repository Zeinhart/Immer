import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  AiOutlineDiscord,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineX,
} from 'react-icons/ai';

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://t3.ftcdn.net/jpg/03/41/65/14/360_F_341651408_xpz7ly4un8nRtjzabt6qa1Yz0Ixpm2Ca.jpg"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/80">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:tet-5xl text-4xl font-bold text-gray-600">
            I'm Johnraine Bonavente
          </h1>
          <h2 className="flex sm:text-2xl text-2xl pt-4 text-gray-600">
            {' '}
            Im a
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'Web Developer',
                2000,
                'Web Designer',
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '7px' }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w[100px] w-full">
            <AiOutlineX className="cursor-pointer" size={30} />
            
            <AiOutlineFacebook className="cursor-pointer" size={30} />
            
            <AiOutlineGithub className="cursor-pointer" size={30}  />
            <AiOutlineDiscord className="cursor-pointer" size={30} />
            <AiOutlineLinkedin className="cursor-pointer" size={30} />
            <AiOutlineMail className="cursor-pointer" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
