/* eslint-disable react/prop-types */
import Typography from '@mui/material/Typography';
import './ItemListContainer.css'
export default function ItemListContainer({greeting = "No hay elementos seleccionados."}) {
  return (
    <div className="item-list-container">
      <Typography variant="h5" gutterBottom component={"div"}>
        {greeting}
      </Typography>
    </div>
  )
}
