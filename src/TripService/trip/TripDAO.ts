import CollaboratorCallException from "../exception/CollaboratorCallException";
import User from "../user/User";
import Trip from "./trip";

export default class TripDAO {
    public static findTripsByUser(user: User): Trip[] {
        throw new CollaboratorCallException(
            "TripDAO should not be invoked on an unit test.");
    }

    public getTripsBy(user: User): Trip[] {
        return TripDAO.findTripsByUser(user);
    }
}