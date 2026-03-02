import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch,
  Stack,
  Badge,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, toggleTheme } from "../store/appSlice";
import CartDrawer from "./CartDrawer";

const pages = [
  { label: "Home", value: "home" },
  { label: "About", value: "about" },
  { label: "Degree", value: "degree" },
  { label: "Skills", value: "skills" },
  { label: "P&RP", value: "projects" },
  { label: "Contact", value: "contact" },
];

export default function TopNavbar() {
  const dispatch = useDispatch();
  const { theme, activePage, cart } = useSelector((state) => state.app);
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <AppBar color="default">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography fontWeight="bold">My Portfolio</Typography>

          <Stack direction="row" spacing={2}>
            {pages.map((p) => (
              <Button
                key={p.value}
                onClick={() => dispatch(setActivePage(p.value))}
                variant={activePage === p.value ? "contained" : "text"}
              >
                {p.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton onClick={() => setOpenCart(true)}>
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <Switch
              checked={theme === "dark"}
              onChange={() => dispatch(toggleTheme())}
            />
          </Stack>
        </Toolbar>
      </AppBar>

      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}