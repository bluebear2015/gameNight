import { AppState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { playerService } from "../services/PlayerService.js";




export class PlayerController {
    constructor() {
        console.log(' controller loaded')
        this.drawPlayers()
    }

    drawPlayers() {

        let content = ''
        AppState.players.forEach(player => {

            content += player.cardTemplate
        })
        document.getElementById('players').innerHTML = content
    }

    managePoints(playerName) {
        let updatedPoints = AppState.players.find(p => p.name == playerName)
        console.log('managing ', playerName, updatedPoints)
        playerService.managePoints(playerName, updatedPoints)
        this.drawPlayers()
    }

    addPlayer() {

        let updatedPoints = AppState.players.points++
        console.log('managing health', playerName, updatedPoints)
        playerService.managePoints(playerName, updatedPoints)
        this.drawPlayers()


    }

}