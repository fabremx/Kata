import TripService from './TripService';
import UserSession from '../user/UserSession';
import User from '../user/User';
import UserBuilder from '../user/UserBuilder';
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

    let tripService = new TripService();

    beforeEach(() => {
        UserSession.getLoggedUser = jest.fn().mockReturnValue(LOGGED_IN_USER);
    })

    it('should throw exception when user is not logged', () => {
        // Given
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
        const friend = UserBuilder.aUser()
                            .friendsWith(ANOTHER_USER)
                            .withTrips(TO_BRAZIL)
                            .build();

        // When
        const friendTrips: Trip[]  = tripService.getTripsByUser(friend)

        // Then
        expect(friendTrips).toEqual([]);
    });

    it('should return friend trips when users are friends', () => {
        // Given
        const friend = UserBuilder.aUser()
                            .friendsWith(ANOTHER_USER, LOGGED_IN_USER)
                            .withTrips(TO_BRAZIL, TO_LONDON)
                            .build();

        TripDAO.findTripsByUser = jest.fn().mockReturnValue(friend.getTrips());

        // When
        const friendTrips: Trip[]  = tripService.getTripsByUser(friend)

        // Then
        const expectedFriendTrips = friend.getTrips();
        expect(friendTrips).toEqual(expectedFriendTrips);
    });
});
