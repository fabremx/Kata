import UserNotLoggedInException from "../exception/UserNotLoggedInException";
import User from "../user/User";
import UserSession from "../user/UserSession";
import Trip from "./Trip";
import TripDAO from "./TripDAO";

export default class TripService {
    public getTripsByUser(user: User): Trip[] {
        if (!this.getLoggedInUser()) {
            throw new UserNotLoggedInException();
        }

        return user.isFriendWith(this.getLoggedInUser())
            ? this.getTripsBy(user)
            : this.noTrips();
    }

    private noTrips(): Trip[] {
        return new Array<Trip>();
    }

    private getLoggedInUser(): User {
        return UserSession.getLoggedUser();
    }

    private getTripsBy(user: User): Trip[] {
        return TripDAO.findTripsByUser(user);
    }
}