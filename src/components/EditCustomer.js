import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditCustomer(props) {
  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = React.useState({
      firstname: '', lastname: '', streetaddress: '', 
      postcode: '', city: '', email: '', phone: ''
  });

  const handleClickOpen = () => {
    setCustomer({firstname: props.customer.firstname, lastname: props.customer.lastname, 
    streetaddress: props.customer.streetaddress, postcode: props.customer.postcode,
    city: props.customer.city, email: props.customer.email, phone: props.customer.phone})
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setCustomer({...customer, [event.target.name]: event.target.value})
  }

  const updateCustomer =  () => {
      props.updateCustomer(customer, props.customer.links[0].href);
      handleClose();
  }

  return (
    <div>
      <Button size="small" variant="outlined" onClick={handleClickOpen}>
        Edit customer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit customer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Choose what to edit
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="firstname"
            value={customer.firstname}
            label="Firstname"
            fullWidth
            onChange={e => handleInputChange(e)}
          />
          <TextField
            margin="dense"
            name="lastname"
            value={customer.lastname}
            label="Lastname"
            fullWidth
            onChange={e => handleInputChange(e)}
          />
          <TextField
            margin="dense"
            name="streetaddress"
            value={customer.streetaddress}
            label="Streetaddress"
            fullWidth
            onChange={e => handleInputChange(e)}
          />
          <TextField
            margin="dense"
            name="postcode"
            value={customer.postcode}
            label="Postcode"
            fullWidth
            onChange={e => handleInputChange(e)}
          />
          <TextField
            margin="dense"
            name="city"
            value={customer.city}
            label="City"
            fullWidth
            onChange={e => handleInputChange(e)}
          />
          <TextField
            margin="dense"
            name="email"
            value={customer.email}
            label="Email"
            fullWidth
            onChange={e => handleInputChange(e)}
          />
          <TextField
            margin="dense"
            name="phone"
            value={customer.phone}
            label="Phone"
            fullWidth
            onChange={e => handleInputChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateCustomer}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
