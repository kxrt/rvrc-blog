import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const PosterGrid = ({posters}) => (
    <Grid container spacing={2} sx={{ mx: "auto", mt: 1, width: "90%" }}>
        {posters.map((poster) => (
            <Grid item xs={12} sm={6} key={poster.title}>
                <Card
                    sx={{
                        height: "100%",
                        fontFamily: "Jost",
                        "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "#592693", mb: 1 }}>
                        {poster.title}
                        </Typography>
                        <Typography color="text.secondary">
                        {poster.presenters.join(", ")}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {poster.course}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
);

export default PosterGrid;