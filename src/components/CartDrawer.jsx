import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../store/appSlice";

export default function CartDrawer({ open, onClose }) {
  const cart = useSelector((state) => state.app.cart);
  const dispatch = useDispatch();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Stack sx={{ width: 300, p: 2 }} spacing={2}>
        <Typography variant="h6">Your Cart</Typography>

        {cart.length === 0 && (
          <Typography color="text.secondary">Cart is empty</Typography>
        )}

        <List>
          {cart.map((item) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton onClick={() => dispatch(removeFromCart(item.id))}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={item.title || item.desc || item} />
            </ListItem>
          ))}
        </List>

        {cart.length > 0 && (
          <Button variant="outlined" color="error" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </Button>
        )}
      </Stack>
    </Drawer>
  );
}