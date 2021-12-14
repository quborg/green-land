type Maybe<T> = T | null | undefined;

type MaybeIn<T> = { [P in keyof T]?: T[P] };
