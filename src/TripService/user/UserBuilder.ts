import Trip from "../trip/Trip";
import User from "./User";

export default class UserBuilder {
    private trips: Trip[] = [];
    private friends: User[] = [];

    public static aUser(): UserBuilder {
        return new UserBuilder();
    }

    public friendsWith(...friends: User[]): UserBuilder {
        this.friends = friends;
        return this;
    }

    public withTrips(...trips: Trip[]): UserBuilder {
        this.trips = trips;
        return this;
    }

    public build(): User {
        const user = new User();
        this.addFriendsTo(user);
        this.addTripsTo(user);
        return user;
    }

    private addFriendsTo(user: User): void {
        for (const friend of this.friends) {
            user.addFriend(friend);
        }
    }

    private addTripsTo(user: User): void {
        for (const trip of this.trips) {
            user.addTrip(trip);
        }
    }
}