export type Color = string | { color: string };

export interface Base {
	id: string;
	color: Color;
}

export interface MoveCard extends Base {}

export interface Position {
	val: number;
}

export interface Shielded {
	shield: number;
}

export interface Boostable {
	boost: boolean;
}

export interface Segment extends Base {
	qual: Object<number, *>;
	pos: Position;
}

export interface Body extends Base, Shielded, Boostable {
	moves: MoveCard[];
	pos: Position;
	crashed: boolean;
}

export interface Shell extends Body {
	isShell: boolean;
}

export interface World extends Base {
	segments: Segment;
	bodies: Body[];
	cardsPlayed: number;
}
