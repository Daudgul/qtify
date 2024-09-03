import * as React from "react";

import FeedbackButton from "../FeedbackButton";
import CustomModal from "../CustomModal";

function Button() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {" "}
      <FeedbackButton handleOpen={handleOpen} />
      <CustomModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </div>
  );
}

export default Button;
