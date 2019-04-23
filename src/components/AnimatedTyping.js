import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedTyping = () => (
   <Typing loop={true} speed={70}>
      <span> I am a full-stack web developer.</span>
      <Typing.Delay ms={2000} />
      <Typing.Backspace count={26} />
      <span> mechanical engineer.</span>
      <Typing.Delay ms={2000} />
      <Typing.Backspace count={21} />
      <span> software enthusiast.</span>
      <Typing.Delay ms={2000} />
      <Typing.Backspace count={30} />
      <Typing.Delay ms={2000} />
   </Typing>
);

export default AnimatedTyping