import classes from './CartButton.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { uiAction } from '../Store/uiSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(uiAction.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
