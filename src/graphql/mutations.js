/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
    id
    name
    mode
    phase
    turn
    speaker {
      id
      name
      color
      faction {
        id
        name
        shortname
      }
    }
    players {
      id
      name
      color
      faction {
        id
        name
        shortname
      }
    }
    objectives {
      id
      type
      name
      text
      value
      revealed
    }
    agendas {
      id
      name
      electedPlayer {
        id
        name
        color
      }
      electedPlanet {
        id
        name
        resources
        influence
        trait
        specialty
      }
    }
    score {
      id
      player {
        id
        name
        color
      }
      type
      objective {
        id
        type
        name
        text
        value
        revealed
      }
      turn
    }
    owner
  }
}
`;
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
    id
    name
    mode
    phase
    turn
    speaker {
      id
      name
      color
      faction {
        id
        name
        shortname
      }
    }
    players {
      id
      name
      color
      faction {
        id
        name
        shortname
      }
    }
    objectives {
      id
      type
      name
      text
      value
      revealed
    }
    agendas {
      id
      name
      electedPlayer {
        id
        name
        color
      }
      electedPlanet {
        id
        name
        resources
        influence
        trait
        specialty
      }
    }
    score {
      id
      player {
        id
        name
        color
      }
      type
      objective {
        id
        type
        name
        text
        value
        revealed
      }
      turn
    }
    owner
  }
}
`;
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
    id
    name
    mode
    phase
    turn
    speaker {
      id
      name
      color
      faction {
        id
        name
        shortname
      }
    }
    players {
      id
      name
      color
      faction {
        id
        name
        shortname
      }
    }
    objectives {
      id
      type
      name
      text
      value
      revealed
    }
    agendas {
      id
      name
      electedPlayer {
        id
        name
        color
      }
      electedPlanet {
        id
        name
        resources
        influence
        trait
        specialty
      }
    }
    score {
      id
      player {
        id
        name
        color
      }
      type
      objective {
        id
        type
        name
        text
        value
        revealed
      }
      turn
    }
    owner
  }
}
`;
export const createPlayer = `mutation CreatePlayer($input: CreatePlayerInput!) {
  createPlayer(input: $input) {
    id
    name
    color
    faction {
      id
      name
      shortname
    }
  }
}
`;
export const updatePlayer = `mutation UpdatePlayer($input: UpdatePlayerInput!) {
  updatePlayer(input: $input) {
    id
    name
    color
    faction {
      id
      name
      shortname
    }
  }
}
`;
export const deletePlayer = `mutation DeletePlayer($input: DeletePlayerInput!) {
  deletePlayer(input: $input) {
    id
    name
    color
    faction {
      id
      name
      shortname
    }
  }
}
`;
export const createPoint = `mutation CreatePoint($input: CreatePointInput!) {
  createPoint(input: $input) {
    id
    player {
      id
      name
      color
      faction {
        id
        name
        shortname
      }
    }
    type
    objective {
      id
      type
      name
      text
      value
      revealed
    }
    turn
  }
}
`;
export const updatePoint = `mutation UpdatePoint($input: UpdatePointInput!) {
  updatePoint(input: $input) {
    id
    player {
      id
      name
      color
      faction {
        id
        name
        shortname
      }
    }
    type
    objective {
      id
      type
      name
      text
      value
      revealed
    }
    turn
  }
}
`;
export const deletePoint = `mutation DeletePoint($input: DeletePointInput!) {
  deletePoint(input: $input) {
    id
    player {
      id
      name
      color
      faction {
        id
        name
        shortname
      }
    }
    type
    objective {
      id
      type
      name
      text
      value
      revealed
    }
    turn
  }
}
`;
