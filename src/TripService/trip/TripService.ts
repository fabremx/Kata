import UserNotLoggedInException from "../exception/UserNotLoggedInException";
import User from "../user/User";
import Trip from "./Trip";
import TripDAO from "./TripDAO";

export default class TripService {
    private tripDAO = new TripDAO();

    public getTripsByUser(friend: User, loggedInUser: User): Trip[] {
        this.validate(loggedInUser);

        return friend.isFriendWith(loggedInUser)
            ? this.getTripsBy(friend)
            : this.noTrips();
    }

    private validate(loggedInUser: User) {
        if (!loggedInUser) {
            throw new UserNotLoggedInException();
        }
    }

    private noTrips(): Trip[] {
        return new Array<Trip>();
    }

    private getTripsBy(user: User): Trip[] {
        return this.tripDAO.getTripsBy(user);
    }
}