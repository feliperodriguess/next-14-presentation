import {
  Character,
  CharactersDocument,
  CharactersQuery,
  CharactersQueryVariables,
} from "@/lib/graphql/generated";
import { gqlFetch } from "@/lib/graphql/utils";

import { CharacterCard } from "./character-card";

export async function CharactersList() {
  const data = await gqlFetch<CharactersQuery, CharactersQueryVariables>(
    CharactersDocument,
    { page: 1 },
    {
      next: {
        revalidate: 60,
        tags: ["characters"],
      },
    }
  );

  // revalidateTag("characters")

  return (
    <section className="space-y-20">
      <div className="flex flex-wrap justify-center gap-12 w-full">
        {data?.characters?.results?.map((character) => (
          <CharacterCard
            key={character?.id}
            character={character as Character}
          />
        ))}
      </div>
    </section>
  );
}
