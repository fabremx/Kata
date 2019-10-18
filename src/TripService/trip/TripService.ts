import UserNotLoggedInException from "../exception/UserNotLoggedInException";
import User from "../user/User";
import UserSession from "../user/UserSession";
import Trip from "./Trip";
import TripDAO from "./TripDAO";

export default class TripService {
    public getTripsByUser(user: User): Trip[] {
        const loggedInUser: User = this.getLoggedInUser();
        if (!loggedInUser) {
            throw new UserNotLoggedInException();
        }

        let tripList: Trip[] = [];
        if (user.isFriendWith(loggedInUser)) {
            tripList = this.getTripsBy(user);
        }

        return tripList;
    }

    private getLoggedInUser(): User {
        return UserSession.getLoggedUser();
    }

    private getTripsBy(user: User): Trip[] {
        return TripDAO.findTripsByUser(user);
    }
}