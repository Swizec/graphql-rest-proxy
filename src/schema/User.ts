import { gql } from "apollo-server-lambda";

export const userSchema = gql`
    type User {
        id: Int
        access_token: String
        token: String
        user_type: String
        favorite_tutor_ids: [Int]
        email: String
        identifier: String
        roles: [String]
        profile_pic_url: String
        registered: Boolean
        is_new_account: Boolean
        has_positive_sessions: Boolean
        account_frozen: Boolean
        account_unfrozen_at: String
        updates_channel: String
        roles_as_string: [String]
    }
`;
