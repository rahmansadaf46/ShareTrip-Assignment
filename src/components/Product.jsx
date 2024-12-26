import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItem, getItemById, removeItem } from "../redux/feature/cartSlice";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useSelector } from "react-redux";
import { Add, DeleteOutline } from "@mui/icons-material";
function Product({ id, name, image, price, oldPrice, discount, brand }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => getItemById(state, id));
  return (
    <>
      {discount && (
        <div className="discount">
          <div className="discount-body">
            <div className="discount-banner">- ৳ {discount}</div>
            <div className="container">
              <div className="shape background-shape"></div>
              <div className="shape overlay-shape"></div>
            </div>
            <div className="shape down-overlay-shape"></div>
          </div>
        </div>
      )}

      <Card>
        <CardActionArea
          sx={{
            width: 230,
            position: "relative",
            overflow: "hidden",
            "&:hover .hoverOverlay": {
              opacity: 1,
            },
            margin: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            width="200"
            image={image}
            alt={name}
          />

          <CardContent>
            <Box
              className="hoverOverlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
            >
              {product ? (
                <Box
                  sx={{
                    background: "#03A328",
                    marginTop: 14,
                    marginBottom: 1,
                    color: "white",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "90%",
                    "&:hover": {
                      backgroundColor: "#06ca33",
                    },
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() =>
                      dispatch(
                        removeItem({
                          id,
                        })
                      )
                    }
                  >
                    <DeleteOutline className="icon" />
                  </IconButton>
                  <Button
                    fullWidth
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      color: "white",
                      fontSize: "14px",
                      textTransform: "none",
                    }}
                    onClick={() =>
                      dispatch(
                        addItem({
                          id,
                        })
                      )
                    }
                  >
                    <>
                      <span>{product?.count}</span>
                      Added in Cart
                    </>
                  </Button>
                  <IconButton
                    size="small"
                    onClick={() =>
                      dispatch(
                        addItem({
                          id,
                        })
                      )
                    }
                  >
                    <Add className="icon" />
                  </IconButton>
                </Box>
              ) : (
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    marginBottom: 1,
                    marginTop: 14,
                    "&:hover": {
                      backdropFilter: "blur(10px)",
                    },
                    backdropFilter: "blur(3px)",
                    WebkitBackdropFilter: "blur(8px)",
                    width: "90%",
                    fontSize: "12px",
                  }}
                  onClick={() =>
                    dispatch(
                      addItem({
                        id,
                      })
                    )
                  }
                >
                  <AddShoppingCart className="icon" />
                  &nbsp;Add to Cart
                </Button>
              )}

              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    backdropFilter: "blur(10px)",
                  },
                  marginBottom: 1,
                  backdropFilter: "blur(3px)",
                  WebkitBackdropFilter: "blur(8px)",
                  width: "90%",
                  fontSize: "12px",
                }}
              >
                <VisibilityIcon className="icon" />
                &nbsp;Quick View
              </Button>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              {brand}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "16px", fontWeight: "bold", width: "220px" }}
              component="div"
            >
              {name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="h6" sx={{ color: "#1882FF" }}>
                ৳ {price}
              </Typography>
              {oldPrice && (
                <Typography
                  variant="body2"
                  sx={{ textDecoration: "line-through", color: "gray" }}
                >
                  ৳ {oldPrice}
                </Typography>
              )}
            </Box>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.string,
  discount: PropTypes.string,
};

export default Product;
