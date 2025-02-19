import { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function AuxComponent(operation) {
    // const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const { productId } = useParams();

    useEffect(() => {
        (async () => {


            // getByCategory
            if (categoryId) {
                
            }

            // getByProduct
            else if (productId) {
                
            }

            // getAll
            else {

            }
        })();
    }, [categoryId, productId]);
};
