import User from "./User";
import UserBuilder from "./UserBuilder";

describe('isFriendWith', () => {
    const ANOTHER_USER = new User();
    const LOGGED_IN_USER = new User();

    it('should return false when users are not friends', () => {
        // Given
        const user = UserBuilder.aUser()
                        .friendsWith(ANOTHER_USER)
                        .build()

        // When
        const isFriend = user.isFriendWith(LOGGED_IN_USER);

        // Then
        expect(isFriend).toBe(false);
    });

    it('should return true when users are friends', () => {
        // Given
        const user = UserBuilder.aUser()
                        .friendsWith(ANOTHER_USER, LOGGED_IN_USER)
                        .build()

        // When
        const isFriend = user.isFriendWith(LOGGED_IN_USER);

        // Then
        expect(isFriend).toBe(true);
    });
});