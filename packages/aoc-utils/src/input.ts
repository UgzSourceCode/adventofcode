export const getInputFromAdventOfCode = async (link: string) => {
  const response = await fetch(link, {
    headers: {
      Cookie: `session=${process.env.AOC_SESSION}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch AoC input");
  }

  return await response.text();
};
