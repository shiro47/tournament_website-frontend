import React from "react";
import { Stack } from "react-bootstrap";
import SignupModal from "./signupModal";

interface details {
  id: number;
  description: string;
  rewards: string;
  rules: string;
  created_at: string;
  starting_at: string;
}

interface Props {
  details: details;
}

const GeneralInfo: React.FC<Props> = (props) => {
  const { details } = props
  return (
    <div style={{padding: "20px"}}>
      <small>Created at: {new Date(details.created_at).toLocaleString()}</small>
      <h2 className="text-center">General Info</h2>
      <Stack gap={2}>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <img
            style={{ maxWidth: "40vh", borderRadius: "2vh" }}
            alt="asdad"
            src="https://c4.wallpaperflare.com/wallpaper/615/444/957/wraith-apex-legends-apex-legends-hd-wallpaper-preview.jpg" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: details.description }}/>
        <hr/>
        <h2 className="text-center">Rewards</h2>
        <div dangerouslySetInnerHTML={{ __html: details.rewards }}/>
        <hr/>
        <h2 className="text-center">Rules</h2>
        <div dangerouslySetInnerHTML={{ __html: details.rules }}/>
        <hr/>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <SignupModal tournamentID={details.id} />
        </div>
      </Stack>
    </div>
  );
};


export default GeneralInfo;