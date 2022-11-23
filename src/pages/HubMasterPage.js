import * as React from "react";
import Card from "../shared/UI/Card/Card";
import NewHubMaster from "../components/newHubMaster";

const HubMasterPage = (props) => {

  return (
    <React.Fragment>
      <Card>
      <NewHubMaster></NewHubMaster>
      </Card>
    </React.Fragment>
  );
};

export default HubMasterPage;
