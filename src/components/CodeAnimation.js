import React from 'react'
import './CodeAnimation.css';
import text from '../text'

const CodeAnimation = () => {
    return (
        <div>   
          
        
                <div class="loader-container">

<div class="group-1">
  <div class="line line1">
    <div class="dash dash-1 exp-40 div"></div>
    <div class="dash dash-2 exp-70 class-name"></div>
    <div class="dash dash-3 exp-110 class"></div>
    <div class="dash dash-4 exp-70 class"></div>
  </div>
  <div class="line line2">
    <div class="dash dash-1 exp-40 div"></div>
    <div class="dash dash-2 exp-70 class-name"></div>
    <div class="dash dash-3 exp-90 class"></div>
  </div>
  <div class="line line3">
    <div class="dash dash-1 exp-300 par"></div>
  </div>
  <div class="line line4">
    <div class="dash dash-1 exp-200 par"></div>
  </div>
  <div class="line line5">
    <div class="dash dash-1 exp-40 div"></div>
  </div>
  <div class="line line6">
    <div class="dash dash-1 exp-40 div"></div>
  </div>
</div>


<div class="group-2">
  <div class="line line1">
    <div class="dash dash-1 div"></div>
    <div class="dash dash-2 class-name"></div>
    <div class="dash dash-3 class"></div>
    <div class="dash dash-4 class"></div>
  </div>
  <div class="line line2">
    <div class="dash dash-1 div"></div>
    <div class="dash dash-2 exp70 class-name"></div>
    <div class="dash dash-3 exp90 class"></div>
  </div>
  <div class="line line3">
    <div class="dash dash-1 par"></div>
  </div>
  <div class="line line4">
    <div class="dash dash-1 par"></div>
  </div>
  <div class="line line5">
    <div class="dash dash-1 div"></div>
  </div>
  <div class="line line6">
    <div class="dash dash-1 div"></div>
  </div>
</div>
</div>

{text.map(tex => (
            <div className='text--container'>
              <p data-aos="fade-up" className='desc--text'>{tex.description}</p>
            </div>
                    
                    ))}
            
        </div>
    )
}

export default CodeAnimation
