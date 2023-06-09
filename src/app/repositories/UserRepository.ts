export interface UserRepository<T, V> {
    saveUser(user:V): void;
    loadUserById(id: string): void | V;
    getUsers(): Map<T, V>;
} 