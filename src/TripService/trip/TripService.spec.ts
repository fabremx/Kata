import TripService from './TripService';
import UserSession from '../user/UserSession';
import User from '../user/User';
import Trip from './Trip';
import UserNotLoggedInException from '../exception/UserNotLoggedInException';

describe('TripService - getTripsByUser', () => {
    const NOT_LOGGED_USER = null;
    const UNUSED_USER = null;

    const LOGGED_USER = new User();
    const ANOTHER_USER = new User();

    const TO_BRAZIL = new Trip();

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

    it('should return any trips when user is not firend with loggedUser', () => {
        // Given
        const tripService = new TripService();
        UserSession.getLoggedUser = jest.fn().mockReturnValue(LOGGED_USER);
        
        const friend: User = new User();
        friend.addFriend(ANOTHER_USER);
        friend.addTrip(TO_BRAZIL);
        friend.getFriends = jest.fn().mockReturnValue(friend.getFriends);

        // When
        const friendTrips: Trip[]  = tripService.getTripsByUser(friend)

        // Then
        expect(friendTrips).toEqual([]);
    })
});
