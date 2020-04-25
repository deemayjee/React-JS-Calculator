import React from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';


const keypad = () => (
  <section className="keypad">
    <KeypadRow>
      <Button>C</Button>
      <Button>+/-</Button>
      <Button>%</Button>
      <Button type="yellow">÷</Button>
    </KeypadRow>
    
    <KeypadRow>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button type="yellow">x</Button>
    </KeypadRow>
    
    <KeypadRow>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button type="yellow">-</Button>
    </KeypadRow>
    
    <KeypadRow>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button type="yellow">+</Button>
    </KeypadRow>
    
    <KeypadRow>
      <Button>0</Button>
      <Button type="large">.</Button>
      <Button type="yellow">=</Button>
    </KeypadRow>
  </section>
);


export default keypad;