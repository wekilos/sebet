import React from 'react';

import "./about.css";
import Location from  '../../components/location';
const About = (props)=>{
    return(
        <div className="about">
            <div>
                <Location name="Biz barada" />
            </div>
            <p>
                    -  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Semper nibh posuere dictum id. Diam accumsan auctor amet, faucibus. 
                    Ante est amet, sit at fermentum nascetur dolor congue. Odio quisque
                    eu pellentesque pellentesque cursus dui vel arcu. Porttitor molestie
                    sit molestie ac phasellus pulvinar nullam. Erat blandit auctor netus 
                    aenean. Commodo tortor risus suspendisse sem consectetur tortor.
                    Morbi at velit lacus ut tellus. Tristique odio adipiscing imperdiet
                    faucibus massa rhoncus vel tincidunt. Facilisis morbi eget ullamcorper
                    ac sed varius integer sed turpis.
            </p>
                <p>
                    - Nunc sagittis, dui nascetur risus ultrices. Sed mus elit,
                    pellentesque scelerisque cursus. Felis, sagittis dolor convallis
                    venenatis posuere malesuada auctor. Amet sit semper elementum turpis
                    auctor pellentesque id tempus sit. A purus viverra ultricies orci.
                    In diam mi consectetur purus eget. Aenean suspendisse varius in nam.
                    At gravida nullam posuere tristique amet enim purus. Tempus mi vestibulum, 
                    malesuada facilisis. Fermentum arcu diam semper nam. In diam pretium augue 
                    et ornare in vel est nunc. Fermentum, sit scelerisque turpis interdum.
                    Consequat tellus nunc sed vel elementum posuere est tortor. Fringilla
                    elementum scelerisque mattis vitae ac risus, in sapien. Proin parturient ac, 
                    risus cursus nulla amet. Turpis malesuada malesuada sed convallis. Dignissim 
                    viverra neque eget justo, pharetra. A, volutpat ut enim tellus.
                        Tincidunt faucibus quis quis mauris cursus.
            </p>
        </div>
    );
};

export default About;