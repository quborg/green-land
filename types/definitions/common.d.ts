type Maybe<T> = T | null;

type MaybeIn<T> = { [P in keyof T]?: T[P] };
