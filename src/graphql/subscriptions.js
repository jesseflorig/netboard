/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame($owner: String!) {
  onCreateGame(owner: $owner) {
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
export const onUpdateGame = `subscription OnUpdateGame($owner: String!) {
  onUpdateGame(owner: $owner) {
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
export const onDeleteGame = `subscription OnDeleteGame($owner: String!) {
  onDeleteGame(owner: $owner) {
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
export const onCreatePlayer = `subscription OnCreatePlayer {
  onCreatePlayer {
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
export const onUpdatePlayer = `subscription OnUpdatePlayer {
  onUpdatePlayer {
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
export const onDeletePlayer = `subscription OnDeletePlayer {
  onDeletePlayer {
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
export const onCreatePoint = `subscription OnCreatePoint {
  onCreatePoint {
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
export const onUpdatePoint = `subscription OnUpdatePoint {
  onUpdatePoint {
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
export const onDeletePoint = `subscription OnDeletePoint {
  onDeletePoint {
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
