interface IUserState{
    email?: string;
    username? :string;
    password? : string;    
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export default IUserState;