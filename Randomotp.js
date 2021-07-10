import Reac,{useState} from 'react'
import "./Randomotp.css"
function Randomotp() {

    const [randomNum, setRandomNum] = useState(
        Math.floor(Math.random() * 163878)
    );
    return (
        <div class="main_div_admit_page">
<div class="box"><p>Your bed is booked.</p>
  </div>
  <div class="otp_box">
    <p class="your_otp">Your UID is</p>
    
    <p class="otp_hash">{randomNum}</p>
    <p class="otp_show">* Please show this at the reception</p>
    </div>
</div>
    )
}

export default Randomotp
