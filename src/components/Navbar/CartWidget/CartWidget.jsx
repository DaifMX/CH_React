/* eslint-disable react/prop-types */
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ColorBadge({handleCart}) {
  return (
    <IconButton spacing={2} direction="row" sx={{ mr: 5, ml: 5 }} onClick={handleCart}>
      <Badge badgeContent={9} color="error" >
        <ShoppingCartIcon color="action" sx={{ color: "white", fontSize: 27}} />
      </Badge>
    </IconButton>
  );
}