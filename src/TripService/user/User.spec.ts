import User from "./User";

describe('isFriendWith', () => {
    it('should return false when users are not friends', () => {
        // Given
        const user = new User();
        const anotherUser = new User();
        const loggedInUser = new User();
        user.addFriend(anotherUser);

        // When
        const isFriend = user.isFriendWith(loggedInUser);

        // Then
        expect(isFriend).toBe(false);
    });

    it('should return true when users are friends', () => {
        // Given
        const user = new User();
        const anotherUser = new User();
        const loggedInUser = new User();
        user.addFriend(anotherUser);
        user.addFriend(loggedInUser);

        // When
        const isFriend = user.isFriendWith(loggedInUser);

        // Then
        expect(isFriend).toBe(true);
    });
});