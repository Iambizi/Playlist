import Tilt from 'react-parallax-tilt';
import TiltStyle from '../styles/scss/tilt.module.scss';

export default function TiltCover(){
    return(
        <>
              <Tilt
                className={`${TiltStyle.tiltStyles}`}
                perspective={500}
                scale={1.02}
                glareEnable={true} 
                glareMaxOpacity={0.9} 
                glareColor="#414141" 
                glarePosition="all">
                <div className={`${TiltStyle.innerTiltStyles}`}>
                    <div>Metal</div>
                    <div>Feelings</div>
                </div>
            </Tilt>
        </>
    );
}