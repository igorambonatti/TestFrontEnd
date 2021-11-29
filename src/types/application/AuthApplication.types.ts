export interface IUser {
  name: string
  email: string
}

export interface IAuthState {
  token: string
  user: IUser
}

export interface ICredentials {
  email: string
  password: string
}

export interface IContext {
  token?: string
  user?: IUser
  loading: boolean
  signIn(credentials: ICredentials): Promise<void>
  signOut(): void
}
