/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
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
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      mode
      phase
      turn
      speaker {
        id
        name
        color
      }
      players {
        id
        name
        color
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
      }
      score {
        id
        type
        turn
      }
      owner
    }
    nextToken
  }
}
`;
export const getPlayer = `query GetPlayer($id: ID!) {
  getPlayer(id: $id) {
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
export const listPlayers = `query ListPlayers(
  $filter: ModelPlayerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      color
      faction {
        id
        name
        shortname
      }
    }
    nextToken
  }
}
`;
export const getPoint = `query GetPoint($id: ID!) {
  getPoint(id: $id) {
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
export const listPoints = `query ListPoints(
  $filter: ModelPointFilterInput
  $limit: Int
  $nextToken: String
) {
  listPoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
