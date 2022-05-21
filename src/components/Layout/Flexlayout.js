import classes from './Flexlayout.module.css';

const Flexlayout = (props) => {
  return (
    <div className={classes.container}>
      {props.children}
    </div>
  );
};

export default Flexlayout;


