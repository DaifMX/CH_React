/* eslint-disable react/prop-types */
import './cartContainer.css'

import Typography from '@mui/material/Typography';

export default function CartContainer({greeting = "No hay elementos seleccionados."}) {
  return (
    <div className="item-list-container">
      <Typography variant="h5" gutterBottom component={"div"}>
        {greeting}
      </Typography>
    </div>
  )
}
