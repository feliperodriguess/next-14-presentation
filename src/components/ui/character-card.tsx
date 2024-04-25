import Image from "next/image";

import { Character } from "@/lib/graphql/generated";

export function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="space-y-2 max-w-[300px]" key={character.id}>
      <h2 className="font-mono text-lg text-slate-200">{character.name}</h2>
      <p className="font-mono text-lg text-slate-200">
        Species: {character.species}
      </p>
      <p className="font-mono text-lg text-slate-200 truncate">
        📍: {character.location?.name}
      </p>
      <Image
        src={character.image!}
        alt={character.name!}
        className="border-2 border-pink-700 rounded-lg"
        height={400}
        width={300}
      />
    </div>
  );
}
