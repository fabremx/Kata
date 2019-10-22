import TripDAO from "./TripDAO";
import User from "../user/User";
import CollaboratorCallException from "../exception/CollaboratorCallException";

describe('getTripsBy', () => {
    it('should throw exception when retrieving trips', () => {
        // Given
        const tripDAO = new TripDAO();
        const user = new User();

        // When
        try {
            tripDAO.getTripsBy(user);
        } catch (error) {
            // Then
            const expectedError = new CollaboratorCallException("TripDAO should not be invoked on an unit test.");
            expect(error).toEqual(expectedError);
        }
    });
})