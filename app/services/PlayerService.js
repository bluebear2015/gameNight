import { AppState } from "../AppState.js"




class PlayerService {


    managePoints(playerName, updatedPoints) {
        let playerController = AppState.players.find(p => p.name == playerController.Name)
        console.log('service', playerController.Name, updatedPoints, playerController)
        playerController.points = updatedPoints
        console.log(playerController)
    }

}



export const playerService = new PlayerService()