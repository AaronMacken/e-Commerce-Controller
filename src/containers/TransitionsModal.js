import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseBtn from '../components/CloseBtn';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { deleteProduct } from '../store/actions/products';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
    '&:focus': {
      outline: '0'
    }
  },
}));

function TransitionsModal(props) {
  const classes = useStyles();

  const { deleteProduct, index } = props;

  let removeItem = () => {
    deleteProduct(index);
  };

  // move this shiz
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // 
  return (
    <div style={{ display: "inline-block" }}>
      <CloseBtn classname="cart-item-close" onClick={handleOpen}>
      </CloseBtn>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}

      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Are you sure you want to delete this?</h2>
            <p id="transition-modal-description">Click button to delete, otherwise click outside of box</p>
            <Button color="secondary" variant="contained" onClick={removeItem}>Delete</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default connect(null, { deleteProduct })(TransitionsModal);
