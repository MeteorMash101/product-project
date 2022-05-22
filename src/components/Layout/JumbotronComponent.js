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

    const hideJumbotronHandler = () => {
        props.onClick();
    };

    return (
        <Container>
            <Jumbotron className={classes.jumbotron}>
                {infoIsShown && <LearnMore onClose={hideInfoHandler}/>}
                <h1 className="display-3">Welcome to product payments services!</h1>
                {/* <p className="lead">Our mission is to delivery the highest, quality service through our online commerce production</p> */}
                <hr className="my-2" />
                <p>Millions of customers rely on our robust, payment testing services to jumpstart their businesses.</p>
                <p className="lead">
                    <Button className={classes.buttons} id={classes.learnMore} variant="primary" onClick={showInfoHandler}>Learn More</Button>
                    <Button className={classes.buttons} id={classes.dismiss} variant="warning" onClick={hideJumbotronHandler}>Dismiss</Button>
                </p>
            </Jumbotron>
        </Container>
    );
};

export default JumbotronComponent;