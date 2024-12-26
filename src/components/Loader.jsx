import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        padding: 5,
      }}
    >
      <CircularProgress thickness={2} size={70} disableShrink />
    </Box>
  );
}
