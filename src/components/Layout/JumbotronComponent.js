import { useState } from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import classes from './JumbotronComponent.module.css';
import LearnMore from '../Overlays/LearnMore.js';


const JumbotronComponent = (props) => {
    
    // for displaying "Learn More" overlay, or not...
    const [infoIsShown, setInfoIsShown] = useState(false);
    const showInfoHandler = () => {
        setInfoIsShown(true);
    };
    const hideInfoHandler = () => {
        setInfoIsShown(false);
    };

    return (
        <Container>
            <Jumbotron className={classes.jumbotron}>
                {infoIsShown && <LearnMore onClose={hideInfoHandler}/>}
                <h1 className="display-3">Welcome to our product services!</h1>
                <p className="lead">Millions of users and companies rely on our tightly knit product service line that produces the best products for every product out there</p>
                <hr className="my-2" />
                <p>Our mission is to delivery the highest, quality service through our online commerce production</p>
                <p className="lead">
                    <Button color="primary" onClick={showInfoHandler}>Learn More</Button>
                </p>
            </Jumbotron>
        </Container>
    );
};

export default JumbotronComponent;