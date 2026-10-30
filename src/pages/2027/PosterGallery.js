import {
  Box,
  Grow,
  Stack,
  Typography,
} from "@mui/material";
import Footer from "../../components/2027/Footer";
import Title from "../../components/2027/Title";
// import PosterGalleryImage from "../../assets/2027/poster-gallery.webp";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import { posterGalleryEvents } from "../../constants/2027/ProgrammeEvents";
import PosterGrid from "../../components/2027/PosterGrid";
import {
  thread1InteractivePosters,
  thread1Posters,
  thread2InteractivePosters,
  thread2Posters,
} from "../../constants/2027/Posters";
import { COLOURS } from "../../constants/Colours";

const PosterGallery = () => {
  return (
    <Stack spacing={0}>
      <Title title="Poster Gallery" />
      {/* <Box component="img" src={PosterGalleryImage} sx={{ width: "100%" }} /> */}
      
      <Stack
        spacing={4}
        sx={{
          backgroundColor: COLOURS.brandTeal,
          paddingInline: "10%",
          paddingBlock: "20px",
        }}
      >
        <Grow
          in
          timeout={1000}
          style={{ transformOrigin: "center bottom"}}
        > 
          <Stack spacing={1}>
            <Typography sx={{ fontSize: { md: "16pt" }, color: "white", textAlign: "justify" }}>
              The Poster Gallery will showcase the breadth 
              of students' academic learning and student-led initiatives. Attendees will have the 
              opportunity to explore the exhibited projects at their own pace, engage with the 
              presented materials, and interact directly with student presenters, fostering a 
              deeper understanding of and personalised insight into each initiative. The abstracts can 
              be viewed in the {" "}
              <a
                href={`${process.env.PUBLIC_URL}/RVRC%20Symposium%20Abstract%20Booklet%202027.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: COLOURS.white, fontWeight: "bold" }}
              >
                Poster Gallery Abstract Booklet
              </a>
            </Typography>
            <Typography sx={{ fontSize: { md: "16pt" }, color: "white", textAlign: "justify" }}>
              Alongside the Poster Gallery, Interactive Booths hosted by community partners 
              will provide attendees with the opportunity to learn about their respective work 
              in advancing environmental conservation, social inclusion, and youth advocacy. 
              These parallel sessions will be held within a shared space during the Networking Tea, 
              cultivating a vibrant and conducive environment for meaningful learning, dialogue, 
              and networking among all participants.
            </Typography>
          </Stack>
        </Grow>
      </Stack>
      
      <ProgrammeHighlights
        title="Poster Gallery Programme"
        events={posterGalleryEvents}
      />

      <Stack gap={2} marginBottom={4}>
        <Stack gap={2}>
          <Box
            sx={{
              backgroundColor: COLOURS.white,
              paddingInline: "10%",
              paddingBlock: { xs: "28px", md: "60px" },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", color: COLOURS.brandPurple, textAlign: "center" }}>
              Interactive Display Posters
            </Typography>
            <PosterGrid
              posters={[...thread1InteractivePosters, ...thread2InteractivePosters]}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: COLOURS.white,
              paddingInline: "10%",
              paddingBlock: { xs: "28px", md: "10px" },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", color: COLOURS.brandPurple, textAlign: "center" }}>
              Standard Posters
            </Typography>
            <PosterGrid
              posters={[...thread1Posters, ...thread2Posters]}
            />
          </Box>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default PosterGallery;
