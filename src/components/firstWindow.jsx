import './firstWindow.css';
import RightArrowSvg from '../assets/svgs/rightarrow.svg'
export const FirstWindow = () => {

    return (
        <div>
        <div>
            <div>
                <h1>The finance platform your team doesn't hate.</h1>
                <p>Runway is the modern and intuitive way to model, plan, and align your business for everyone on your team.</p>
            </div>
            <div className='window-div'></div>
        </div>
        <div className='icon-demoButton'>
            <div></div>
            <div className="demo-button">
                <h1>Book a Demo</h1>
                <img className='arrow-img' src={RightArrowSvg} alt="demo-icon"/>
            </div>
        </div>
        </div>
    )
}