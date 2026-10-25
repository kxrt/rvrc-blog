import {
  Grow,
  Stack,
  Typography,
} from "@mui/material";
import Footer from "../../components/2027/Footer";
import Title from "../../components/2027/Title";
// import PosterGalleryImage from "../../assets/2027/poster-gallery.webp";
import ProgrammeHighlights from "../../components/highlights/ProgrammeHighlights";
import { posterGalleryEvents } from "../../constants/2027/ProgrammeEvents";
import {
  thread1InteractivePosters,
  thread1Posters,
  thread2InteractivePosters,
  thread2Posters,
} from "../../constants/2027/Posters";
import { COLOURS } from "../../constants/Colours";

const PosterGallery = () => {
  const renderPosterList = (posters) => (
    <Stack component="ul" spacing={1.5} sx={{ listStyle: "none", m: 0, p: 0, mx: "5%" }}>
      {posters.map((poster) => (
        <Stack component="li" key={poster.title} spacing={0.5}>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "#592693" }}>
            {poster.title}
          </Typography>
          <Typography color="text.secondary">
            {poster.presenters.join(", ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {poster.course}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );

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
              deeper understanding of and personalised insight into each initiative.
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
          <Typography variant="h5" sx={{ mx: "5%", fontWeight: "bold" }}>
            Interactive Display Posters
          </Typography>
          {renderPosterList([...thread1InteractivePosters, ...thread2InteractivePosters])}
          <Typography variant="h5" sx={{ mx: "5%", fontWeight: "bold" }}>
            Standard Posters
          </Typography>
          {renderPosterList([...thread1Posters, ...thread2Posters])}
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default PosterGallery;
