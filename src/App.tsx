import React from "react";
import StarRating from "./components/StarRating/StarRating";
import Box from "./components/Layout/Box/Box";
import Description from "./components/Layout/Description/Description";

import StartRating from "./assets/examples/StarRating.png";

function App() {
  // StarRating component
  const [rating, setRating] = React.useState(3);
  const starRatingDescription = `This component is a star rating component. It displays a number of stars and allows the user to select a rating by clicking on a star.`;
  const starRatingPropsList = [
    {
      name: "maxRating",
      type: "number",
      description: "The maximum rating that can be set",
    },
    {
      name: "defaultRating",
      type: "number",
      description: "The default rating to display",
    },
    {
      name: "color",
      type: "string",
      description: "The color of the stars",
    },
    {
      name: "size",
      type: "number",
      description: "The size of the stars",
    },
    {
      name: "messages",
      type: "string[]",
      description: "The messages to display for each rating",
    },
    {
      name: "onSetRating",
      type: "(rating: number) => void",
      description: "The function to call when a rating is set",
    },
  ];

  return (
    <div className="App">
      <h1>My UI Library</h1>
      <Box title="Star Rating">
        <StarRating
          maxRating={5}
          defaultRating={3}
          color="#337CCF"
          size={50}
          messages={["Terrible", "Bad", "Okay", "Good", "Great"]}
          onSetRating={setRating}
        />
        <p>Rating: {rating}</p>
        <Description
          description={starRatingDescription}
          propsList={starRatingPropsList}
          example={StartRating}
        />
      </Box>
    </div>
  );
}

export default App;
