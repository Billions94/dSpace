import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateRegister: any;
  DateTime: any;
  Upload: any;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  media?: Maybe<Scalars['String']>;
  postId: Scalars['String'];
  replies?: Maybe<Array<Maybe<Reply>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
};

export type CommentInput = {
  content: Scalars['String'];
  media?: InputMaybe<Scalars['String']>;
};

export type Data = {
  __typename?: 'Data';
  user: User;
};

export type Error = {
  __typename?: 'Error';
  error: ErrorMessage;
};

export type ErrorMessage = {
  __typename?: 'ErrorMessage';
  message: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment: Comment;
  addCover: User;
  addPost: Post;
  addPostLike: Scalars['Boolean'];
  addReply: Reply;
  deleteComment: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  deleteReply: Scalars['Boolean'];
  deleteSession?: Maybe<Scalars['Boolean']>;
  deleteUser: Scalars['Boolean'];
  followUser: Scalars['Boolean'];
  login?: Maybe<AuthResponse>;
  register?: Maybe<AuthResponse>;
  updateComment: Comment;
  updatePost: Post;
  updateReply: Reply;
  updateUser: User;
  uploadFile?: Maybe<Scalars['Boolean']>;
};


export type MutationAddCommentArgs = {
  input?: InputMaybe<CommentInput>;
  postId?: InputMaybe<Scalars['String']>;
};


export type MutationAddCoverArgs = {
  file: Scalars['Upload'];
};


export type MutationAddPostArgs = {
  input?: InputMaybe<PostInput>;
};


export type MutationAddPostLikeArgs = {
  postId?: InputMaybe<Scalars['String']>;
};


export type MutationAddReplyArgs = {
  commentId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<ReplyInput>;
};


export type MutationDeleteCommentArgs = {
  commentId?: InputMaybe<Scalars['String']>;
};


export type MutationDeletePostArgs = {
  postId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteReplyArgs = {
  replyId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteUserArgs = {
  userId?: InputMaybe<Scalars['String']>;
};


export type MutationFollowUserArgs = {
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  input?: InputMaybe<SessionInput>;
};


export type MutationRegisterArgs = {
  input?: InputMaybe<RegisterUserInput>;
};


export type MutationUpdateCommentArgs = {
  commentId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<CommentInput>;
};


export type MutationUpdatePostArgs = {
  input?: InputMaybe<PostInput>;
  postId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateReplyArgs = {
  input?: InputMaybe<ReplyInput>;
  replyId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  input?: InputMaybe<UserInput>;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type Post = {
  __typename?: 'Post';
  comments?: Maybe<Array<Maybe<Comment>>>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  likes?: Maybe<Array<Maybe<User>>>;
  media?: Maybe<Scalars['String']>;
  sharedPost?: Maybe<Post>;
  updatedAt?: Maybe<Scalars['Date']>;
  user: User;
};

export type PostInput = {
  content: Scalars['String'];
  media?: InputMaybe<Scalars['String']>;
  sharedPost?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  comments: Array<Comment>;
  getCommentById: Comment;
  getFollowers?: Maybe<Array<Maybe<User>>>;
  getFollowing?: Maybe<Array<Maybe<User>>>;
  getPostById: Post;
  getReplyById: Post;
  posts: Array<Post>;
  replies: Array<Reply>;
  sessions?: Maybe<Array<Session>>;
  user: User;
  userByUsername: UserResponse;
  users: Array<User>;
};


export type QueryGetCommentByIdArgs = {
  commentId?: InputMaybe<Scalars['String']>;
};


export type QueryGetPostByIdArgs = {
  postId?: InputMaybe<Scalars['String']>;
};


export type QueryGetReplyByIdArgs = {
  replyId?: InputMaybe<Scalars['String']>;
};


export type QueryUserByUsernameArgs = {
  username?: InputMaybe<Scalars['String']>;
};

export type RegisterUserInput = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type Reply = {
  __typename?: 'Reply';
  commentId: Scalars['String'];
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  media?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
};

export type ReplyInput = {
  content: Scalars['String'];
  media?: InputMaybe<Scalars['String']>;
};

export type Session = {
  __typename?: 'Session';
  isValid: Scalars['Boolean'];
  user: User;
  userAgent?: Maybe<Scalars['String']>;
};

export type SessionInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newPost?: Maybe<Post>;
};

export type Success = {
  __typename?: 'Success';
  data?: Maybe<Data>;
};

export type User = {
  __typename?: 'User';
  activities?: Maybe<Array<Maybe<Post>>>;
  bio?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  session?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  userName: Scalars['String'];
};

export type UserInput = {
  bio?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
};

export type UserResponse = Error | Success;

export type CreatePostMutationVariables = Exact<{
  input?: InputMaybe<PostInput>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', addPost: { __typename?: 'Post', id: string, content: string, user: { __typename?: 'User', userName: string } } };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, content: string, user: { __typename?: 'User', userName: string }, comments?: Array<{ __typename?: 'Comment', content: string } | null> | null }> };

export type GetPostByIdQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type GetPostByIdQuery = { __typename?: 'Query', getPostById: { __typename?: 'Post', id: string, content: string, createdAt?: any | null, user: { __typename?: 'User', userName: string }, comments?: Array<{ __typename?: 'Comment', content: string } | null> | null } };

export type UpdatePostMutationVariables = Exact<{
  postId?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<PostInput>;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string, content: string, media?: string | null, createdAt?: any | null, updatedAt?: any | null } };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, bio?: string | null, location?: string | null, image?: string | null, cover?: string | null, session?: string | null, isVerified?: boolean | null, createdAt?: any | null, userName: string, followers?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, userName: string, email?: string | null, refreshToken?: string | null, bio?: string | null, location?: string | null, image?: string | null, cover?: string | null, session?: string | null, isVerified?: boolean | null, createdAt?: any | null } | null> | null, following?: Array<{ __typename?: 'User', id: string } | null> | null }> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, image?: string | null, firstName?: string | null, lastName?: string | null, userName: string, bio?: string | null, cover?: string | null, email?: string | null, createdAt?: any | null, updatedAt?: any | null } };

export type UserByUsernameQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;


export type UserByUsernameQuery = { __typename?: 'Query', userByUsername: { __typename?: 'Error', error: { __typename?: 'ErrorMessage', message: string } } | { __typename?: 'Success', data?: { __typename?: 'Data', user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, userName: string, email?: string | null, bio?: string | null, location?: string | null, image?: string | null, cover?: string | null, session?: string | null, isVerified?: boolean | null, createdAt?: any | null, updatedAt?: any | null, followers?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, userName: string, email?: string | null } | null> | null, following?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, userName: string, email?: string | null } | null> | null } } | null } };

export type RegisterMutationVariables = Exact<{
  input?: InputMaybe<RegisterUserInput>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string } | null };

export type LoginMutationVariables = Exact<{
  input?: InputMaybe<SessionInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string } | null };

export type UpdateUserMutationVariables = Exact<{
  input?: InputMaybe<UserInput>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', bio?: string | null, cover?: string | null, email?: string | null, userName: string, firstName?: string | null, lastName?: string | null, image?: string | null, isVerified?: boolean | null, location?: string | null } };

export type DeleteUserMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };


export const CreatePostDocument = gql`
    mutation CreatePost($input: PostInput) {
  addPost(input: $input) {
    id
    content
    user {
      userName
    }
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const PostsDocument = gql`
    query Posts {
  posts {
    id
    content
    user {
      userName
    }
    comments {
      content
    }
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const GetPostByIdDocument = gql`
    query GetPostById($postId: String!) {
  getPostById(postId: $postId) {
    id
    content
    createdAt
    user {
      userName
    }
    comments {
      content
    }
  }
}
    `;

/**
 * __useGetPostByIdQuery__
 *
 * To run a query within a React component, call `useGetPostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByIdQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetPostByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
      }
export function useGetPostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
        }
export type GetPostByIdQueryHookResult = ReturnType<typeof useGetPostByIdQuery>;
export type GetPostByIdLazyQueryHookResult = ReturnType<typeof useGetPostByIdLazyQuery>;
export type GetPostByIdQueryResult = Apollo.QueryResult<GetPostByIdQuery, GetPostByIdQueryVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($postId: String, $input: PostInput) {
  updatePost(postId: $postId, input: $input) {
    id
    content
    media
    createdAt
    updatedAt
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($postId: String!) {
  deletePost(postId: $postId)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    firstName
    lastName
    email
    bio
    location
    image
    cover
    session
    isVerified
    createdAt
    userName
    followers {
      id
      firstName
      lastName
      userName
      email
      refreshToken
      bio
      location
      image
      cover
      session
      isVerified
      createdAt
    }
    following {
      id
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UserDocument = gql`
    query User {
  user {
    id
    image
    firstName
    lastName
    userName
    bio
    cover
    email
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserByUsernameDocument = gql`
    query UserByUsername($username: String) {
  userByUsername(username: $username) {
    ... on Success {
      data {
        user {
          id
          firstName
          lastName
          userName
          email
          followers {
            id
            firstName
            lastName
            userName
            email
          }
          following {
            id
            firstName
            lastName
            userName
            email
          }
          bio
          location
          image
          cover
          session
          isVerified
          createdAt
          updatedAt
        }
      }
    }
    ... on Error {
      error {
        message
      }
    }
  }
}
    `;

/**
 * __useUserByUsernameQuery__
 *
 * To run a query within a React component, call `useUserByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserByUsernameQuery(baseOptions?: Apollo.QueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(UserByUsernameDocument, options);
      }
export function useUserByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(UserByUsernameDocument, options);
        }
export type UserByUsernameQueryHookResult = ReturnType<typeof useUserByUsernameQuery>;
export type UserByUsernameLazyQueryHookResult = ReturnType<typeof useUserByUsernameLazyQuery>;
export type UserByUsernameQueryResult = Apollo.QueryResult<UserByUsernameQuery, UserByUsernameQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterUserInput) {
  register(input: $input) {
    accessToken
    refreshToken
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: SessionInput) {
  login(input: $input) {
    accessToken
    refreshToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UserInput) {
  updateUser(input: $input) {
    bio
    cover
    email
    userName
    firstName
    lastName
    image
    isVerified
    location
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($userId: String) {
  deleteUser(userId: $userId)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;