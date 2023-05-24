import React from "react";
import { AppBarContainer, ButtonList, Home } from "./styled";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import HomeIcon from "@mui/icons-material/Home";

function AppBar(props) {
  return (
    <AppBarContainer>
      <Home>
      <HomeIcon
        size="small"
        variant="contained"
        onClick={props.goChooseProfilePage}
      >
       
      </HomeIcon>
      </Home>
      <p>Astromatch</p>

      <ButtonList>
      <PlaylistAddCheckIcon
        size="small"
        variant="contained"
        onClick={props.goToMatchesListPages}
      >
        Lista
      </PlaylistAddCheckIcon>
      </ButtonList> 

    </AppBarContainer>
  );
}

export default AppBar;
