import TripService from './TripService';
import UserSession from '../user/UserSession';
import User from '../user/User';
import Trip from './Trip';
import UserNotLoggedInException from '../exception/UserNotLoggedInException';
import TripDAO from './TripDAO';

describe('TripService - getTripsByUser', () => {
    const NOT_LOGGED_USER = null;
    const UNUSED_USER = null;

    const LOGGED_IN_USER = new User();
    const ANOTHER_USER = new User();

    const TO_BRAZIL = new Trip();
    const TO_LONDON =  new Trip();

    it('should throw exception when user is not logged', () => {
        // Given
        const tripService = new TripService();
        UserSession.getLoggedUser = jest.fn().mockReturnValue(NOT_LOGGED_USER);
       
        // When
        try {
            tripService.getTripsByUser(UNUSED_USER);
        }
        catch (error) {
            // Then
            const expectedError = new UserNotLoggedInException();
            expect(error).toEqual(expectedError);
        }
    });

    it('should return any trips when users are not friends', () => {
        // Given
        const tripService = new TripService();
        UserSession.getLoggedUser = jest.fn().mockReturnValue(LOGGED_IN_USER);
        
        const friend: User = new User();
        friend.addFriend(ANOTHER_USER);
        friend.addTrip(TO_BRAZIL);

        // When
        const friendTrips: Trip[]  = tripService.getTripsByUser(friend)

        // Then
        expect(friendTrips).toEqual([]);
    });

    it('should return friend trips when users are friends', () => {
        // Given
        const tripService = new TripService();
        const friend: User = new User();
        friend.addFriend(ANOTHER_USER);
        friend.addFriend(LOGGED_IN_USER);
        friend.addTrip(TO_BRAZIL);
        friend.addTrip(TO_LONDON);

        UserSession.getLoggedUser = jest.fn().mockReturnValue(LOGGED_IN_USER);
        TripDAO.findTripsByUser = jest.fn().mockReturnValue(friend.getTrips());

        // When
        const friendTrips: Trip[]  = tripService.getTripsByUser(friend)

        // Then
        const expectedFriendTrips = friend.getTrips();
        expect(friendTrips).toEqual(expectedFriendTrips);
    });
});
