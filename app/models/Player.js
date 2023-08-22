export class Player {
    constructor(name) {
        this.name = name;
        // The score is defaulted to start at 0
        this.points = 0;
    }


    get cardTemplate() {
        return `
    <div class="col-3 m-2 bg-light rounded elevation-2">
    
    <div class = "border border-3 border-danger text-warning"> ${this.name} ${this.points} </div>
    <button class="btn btn-info text-bold text-light m-2" onclick="app.PlayerController.managePoints('${this.name}')">Add Points</button>
    </div>
    `
    }
}