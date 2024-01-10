import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    inactiveUsers: string[] = ['An', 'Minh', 'Huy'];
    activeUsers: string[] = ['Hung', 'Vu', 'Nguyen'];

    constructor(private counterService: CounterService) {
    }

    setActiveUser(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.counterService.increaseActiveToInactiveUser();

        this.inactiveUsers.splice(id, 1);        

        console.log(`Current activeToInactiveCounter: ${this.counterService.activeToInactiveCounter}, inactiveToActiveCounter: ${this.counterService.inactiveToActiveCounter}`);
    }

    setInActiveUser(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.counterService.increaseInactiveToActiveUser();

        this.activeUsers.splice(id, 1);

        console.log(`Current activeToInactiveCounter: ${this.counterService.activeToInactiveCounter}, inactiveToActiveCounter: ${this.counterService.inactiveToActiveCounter}`);
    }
}